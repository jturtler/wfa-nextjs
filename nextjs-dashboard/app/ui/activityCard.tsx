import { Fragment, useState } from "react";
import Modal from "./modal";
import ActivityDetail from "./activityDetail";
import { LuActivitySquare } from "react-icons/lu";
import { FaSyncAlt } from "react-icons/fa";
import { useActivityAddFavShowContext } from "../contexts/activityAddFavContext";


export default function ActivityCard( { activity }: { activity: any} ) {

	const [ showModal, setShowModal ] = useState<boolean>(false);
	const { setActivityAddFavShow } = useActivityAddFavShowContext();

	const activityDetailModalClose = () => {
		setShowModal(false);
		setActivityAddFavShow(true);
	};

	const activityCardClick = () => {
		setShowModal(true);
		setActivityAddFavShow(false);
	};

	console.log( 'rendering ActivityCard' );

	return (
		<Fragment>
			<div className="m-2 grid min-h-[50px] cursor-pointer grid-cols-[15%_70%_15%] gap-1 rounded-lg bg-indigo-100 p-0 text-gray-700 shadow-lg hover:bg-blue-200 text-sm" onClick={ (e) => activityCardClick() }>
				<div className="flex items-center justify-center">
					<LuActivitySquare className="min-w-[30px] max-w-[40px] min-h-[30px] max-h-[40px]"></LuActivitySquare>
				</div>
				<div className="p-2">
					<div className="min-h-[20px] font-semibold">Created: {activity.date.createdLoc}</div>
					<div className="min-h-[20px]">Activity Type: {activity.type}</div>
					<div className=""></div>
				</div>
				<div className="flex items-center p-1 justify-center">
					<FaSyncAlt className="min-w-[20px] max-w-[30px] min-h-[20px] max-h-[30px] text-green-600" />
				</div>
			</div>
			<Modal isVisible={showModal} onClose={activityDetailModalClose}>
				<ActivityDetail onClose={activityDetailModalClose} activity={activity}></ActivityDetail>
			</Modal>
		</Fragment>
	);
}