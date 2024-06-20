import { useState } from "react";
import SectionTop from "./sectionTop";
import ClientProfile from "./clientProfile";
import ClientActivities from "./clientActivities";

export default function ClientDetail( { onClose, client }: { onClose: () => void, client: any } ) {

	const [ activeTab, setActiveTab ] = useState( 'tab1' );

	//  (e) => clientDetailModalClose()

	const tabStyleActive = 'border-b-2 border-blue-500  bg-blue-100 text-blue-600';
	const tabStyleInactive = 'bg-gray-100 text-gray-500 hover:text-gray-700';

	return ( 
		<div className="bg-white w-screen h-screen">
		<SectionTop menuIconMode={false} backArrowClick={onClose}></SectionTop>

		<div className="mx-auto w-11/12 mt-1">
			<div className="flex">
			<button className={ `${ activeTab === 'tab1' ? tabStyleActive: tabStyleInactive } flex-1 p-2` } onClick={() => setActiveTab('tab1')}>Client</button>
			<button className={ `${ activeTab === 'tab2' ? tabStyleActive: tabStyleInactive } flex-1 p-2` } onClick={() => setActiveTab('tab2')}>Activities</button>
				
			</div>
			<div className="bg-orange-50 p-4">
			{ ( activeTab === 'tab1' ) ? <ClientProfile client={client}></ClientProfile> : <></> }
			{ ( activeTab === 'tab2' ) ? <ClientActivities activities={client.activities}></ClientActivities> : <></> }
			</div>
		</div>
	</div>

	);
};