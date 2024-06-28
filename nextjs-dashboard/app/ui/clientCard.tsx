import { Fragment, useState } from "react";
import Modal from "./modal";
import ClientDetail from "./clientDetail";
import { useClientAddFavShowContext } from "../contexts/clientAddFavContext";

export default function ClientCard( { client, option }: { client: any, option: any} ) {

	const [ showModal, setShowModal ] = useState<boolean>(false);

	const { setClientAddFavShow } = useClientAddFavShowContext();


	// const clickableCss = ( option.clickable ) ? 'hover:bg-blue-200': '';

	const clientDetailModalClose = () => {
		setShowModalWarpper(false);
	};

	const setShowModalWarpper = ( isTrue: boolean ) => {
		if ( option.clickable ) {
			setShowModal(isTrue);
			setClientAddFavShow( !isTrue );
		}
	};

	console.log( 'rendering ClientCard' );

	const lastActivity = ( client.activities?.length > 0 ) ? client.activities[0]: undefined;

	return (
		<Fragment>
			<div className={ `m-1 grid grid-cols-[15%_70%_15%] gap-1 text-gray-700 ${ ( option.clickable ) ? 'hover:bg-blue-200 cursor-pointer p-0 min-h-[100px] rounded-lg bg-gray-200 shadow-lg': 'p-0 text-sm min-h-[70px] bg-gray-100 ' } ` } onClick={ (e) => { setShowModalWarpper(true) } }>
				<div className="flex items-center p-1 align-middle min-w-[40px] max-w-[55px]">
					<img className="" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" title="" />
				</div>
				<div className="p-2">
					<div className="min-h-[20px] font-semibold">{client?.clientDetails?.firstName + ' ' + client?.clientDetails?.lastName}</div>
					<div className="min-h-[20px]">Last activity: {lastActivity?.date?.updatedLoc}</div>
					<div className="min-h-[20px]"></div>
				</div>
				<div className="flex items-center p-1 align-middle min-w-[40px] max-w-[55px]">
					<img className="pr-2" src="https://cdn-icons-png.flaticon.com/512/3306/3306599.png" />
				</div>
			</div>
			<Modal isVisible={showModal} onClose={clientDetailModalClose}>
				<ClientDetail onClose={clientDetailModalClose} client={client}></ClientDetail>
			</Modal>
		</Fragment>
	);
}