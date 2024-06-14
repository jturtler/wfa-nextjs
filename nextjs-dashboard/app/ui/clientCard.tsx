import { useState } from "react";
import Modal from "./modal";
import { FaHospitalUser } from "react-icons/fa";
import { JSONObject } from "../lib/definitions";
import * as Utils from "@/app/lib/utils";

export default function ClientCard( {client}: {client: JSONObject}) {

	const [ isVisible, setIsVisible ] = useState<boolean>(false);

	// const clientDetails = client.clientDetails;
	const lastActivityDate = ( client.activities?.length > 0 ) ? Utils.formatDate(new Date(client.activities[client.activities.length - 1].date)) : ["[no activity]"];

	const clientDetailModalClose = () => {
		console.log( 'modal close called');
		setIsVisible( false );
	};

	return (
		<>
		<div className="m-1 grid min-h-[100px] cursor-pointer grid-cols-[10%_80%_10%] gap-1 rounded-lg bg-gray-200 p-2 text-gray-700 shadow-lg hover:bg-blue-200" onClick={(e) => setIsVisible(true)}>
			<div className="flex items-center p-1 align-middle">
				<img className="" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" title="" />
			</div>
			<div className="p-1">
				{/* <div className="min-h-[20px] font-semibold">{clientDetails?.firstName + ' ' + clientDetails?.lastName}</div>
				<div className="min-h-[20px]">Last activity: {lastActivity?.date?.updatedUTC}</div> */}
				<div className="min-h-[20px] font-semibold">{client.fullName}</div>
				<div className="min-h-[20px]">Last activity: {lastActivityDate}</div>
				<div className="min-h-[20px]"></div>
			</div>
			<div className="flex items-center p-1 align-middle">
				<img className="animate-spin" alt="" src="https://cdn-icons-png.flaticon.com/512/3306/3306599.png" />
			</div>
		</div>
		<Modal isVisible={isVisible} onClose={clientDetailModalClose} >
			<div className="bg-white w-screen h-screen p-2">
				<div className="font-semibold cursor-pointer" onClick={(e) => { clientDetailModalClose() } }>X</div>
				<div>{JSON.stringify(client)}</div>
			</div>
		</Modal>
		</>
	);
}