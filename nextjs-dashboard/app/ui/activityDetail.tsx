import { useState } from "react";
import SectionTop from "./sectionTop";
import { Button } from "./button";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState  } from "../redux/rootStore";
// import { increaseCount } from "../redux/ations";

export default function ActivityDetail( { onClose, activity }: { onClose: () => void, activity: any } ) {

	const [ activeTab, setActiveTab ] = useState( 'tab1' );
	//const [ btnClickCount, setbtnClickCount ] = useState( 0 );
	// useSelector <-- to read redux value
	// useDispatch <-- to save value on redux
	const btnClickCount = useSelector((state: RootState) => state.abdaf.count);
	const dispatch = useDispatch<AppDispatch>();

	//  (e) => ActivityDetailModalClose()

	const tabStyleActive = 'border-b-2 border-blue-500  bg-blue-100 text-blue-600';
	const tabStyleInactive = 'bg-gray-100 text-gray-500 hover:text-gray-700';

	const btnClickEvent = () => {

		// Increment the state
		// setbtnClickCount( btnClickCount + 1 );

		// dispatch( increaseCount( btnClickCount ) ); // <-- Action?  
		dispatch( { type: 'increase', payload: btnClickCount } ); // <-- Action Json 

	};

	return ( 
		<div className="bg-white w-screen h-screen">
		<SectionTop menuIconMode={false} backArrowClick={onClose}></SectionTop>

		<div className="mx-auto w-11/12 mt-1">
			<div className="flex">
			<button className={ `${ activeTab === 'tab1' ? tabStyleActive: tabStyleInactive } flex-1 p-2` } onClick={() => setActiveTab('tab1')}>Detail</button>
			<button className={ `${ activeTab === 'tab2' ? tabStyleActive: tabStyleInactive } flex-1 p-2` } onClick={() => setActiveTab('tab2')}>PayloadJson</button>
				
			</div>
			<div className="bg-orange-50 p-4">
				<Button className="flex-1 justify-center mx-5" onClick={ (e) => { btnClickEvent() } }>
							Click
						</Button>
				<div>Click Count: { btnClickCount }</div>
			</div>
		</div>
	</div>

	);
};