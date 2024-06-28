import { Fragment, useState } from "react";
import Modal from "./modal";
import ActivityDetail from "./activityDetail";

export default function ActivityCard( { activity }: { activity: any} ) {

	const [ showModal, setShowModal ] = useState<boolean>(false);

	const activityDetailModalClose = () => {
		setShowModal(false);
	};

	console.log( 'rendering ActivityCard' );


	return (
		<Fragment>
			<div className="m-2 grid min-h-[80px] cursor-pointer grid-cols-[15%_70%_15%] gap-1 rounded-lg bg-indigo-100 p-0 text-gray-700 shadow-lg hover:bg-blue-200 text-sm" onClick={ (e) => { setShowModal(true) } }>
				<div className="flex items-center p-1 align-middle">
					<img className="min-w-[30px] max-w-[40px]" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" title="" />
				</div>
				<div className="p-2">
					<div className="min-h-[20px] font-semibold">Created: {activity.date.createdLoc}</div>
					<div className="min-h-[20px]">Activity Type: {activity.type}</div>
					<div className="min-h-[20px]"></div>
				</div>
				<div className="flex items-center p-1 align-middle min-w-[30px] max-w-[40px]">
					<img className="" src="https://cdn-icons-png.flaticon.com/512/3306/3306599.png" />
				</div>
			</div>
			<Modal isVisible={showModal} onClose={activityDetailModalClose}>
				<ActivityDetail onClose={activityDetailModalClose} activity={activity}></ActivityDetail>
			</Modal>
		</Fragment>
	);
}