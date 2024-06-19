import { Fragment, useState } from "react";
import Modal from "./modal";

export default function ClientCard( { client }: { client: any} ) {

	const [ showModal, setShowModal ] = useState<boolean>(false);

	const clientDetailModalClose = () => {
		setShowModal(false);
	};

	console.log( 'rendering ClientCard' );

	const lastActivity = ( client.activities?.length > 0 ) ? client.activities[0]: undefined;

	return (
		<Fragment>
			<div className="m-1 grid min-h-[100px] cursor-pointer grid-cols-[10%_80%_10%] gap-1 rounded-lg bg-gray-200 p-2 text-gray-700 shadow-lg hover:bg-blue-200" onClick={ (e) => { setShowModal(true) } }>
			<div className="flex items-center p-1 align-middle">
				<img className="" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" title="" />
			</div>
			<div className="p-1">
				<div className="min-h-[20px] font-semibold">{client?.clientDetails?.firstName + ' ' + client?.clientDetails?.lastName}</div>
				<div className="min-h-[20px]">Last activity: {lastActivity?.date?.updatedLoc}</div>
				<div className="min-h-[20px]"></div>
			</div>
			<div className="flex items-center p-1 align-middle">
				<img className="" src="https://cdn-icons-png.flaticon.com/512/3306/3306599.png" />
			</div>
			</div>
			<Modal isVisible={showModal} onClose={clientDetailModalClose}>
				<div className="bg-white w-screen h-screen">
					<div className="font-bold cursor-pointer" onClick={ (e) => clientDetailModalClose() }>X</div>
					<div>{JSON.stringify(client)}</div>
				</div>
			</Modal>
		</Fragment>
	);
}