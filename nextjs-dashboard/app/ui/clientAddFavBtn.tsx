import { useState } from "react";
import { useClientAddFavShowContext } from "../contexts/clientAddFavContext";
import Modal from "./modal";
import { useClientListContext } from "../contexts/clientListContext";

const clientTemplate =
{
	"date": {
		"updatedOnMdbUTC": "2024-05-30T22:36:19.864",
		"updatedLoc": "2024-05-31T07:36:19.000",
		"updatedUTC": "2024-05-30T22:36:19.864",
		"createdLoc": "2024-05-31T01:20:08.000",
		"createdUTC": "2024-05-30T16:20:08.471",
		"updatedOnMdbLoc": "2024-05-31T07:36:19.000"
	},
	"clientDetails": {
		"lastName": "Morataya",
		"country": "T_GT",
		"sexWorker": "YES",
		"occupation": "estudiayTrabaja",
		"gender": "M",
		"idDocument": "",
		"pseudonym": "",
		"personalDataConsent": "YES",
		"subPopulationType": "HSH_H(G)",
		"CUIC": "MOM311092QUE",
		"contactConsentService": "YESP",
		"educationLevel": "bachilleratoIntermedio",
		"birthDepartment_GT": "QUE",
		"voucherCodes": [
			"184270023510"
		],
		"ownershipOfPhone": "HER",
		"hivStatus": "negativo",
		"localizedContact": "",
		"voucherCode": "184270023510",
		"citizen": "YES",
		"phoneNumber_whatsApp": "+50222519350",
		"nickName": "",
		"sex": "M",
		"birthDepartment": "QUE",
		"activeUsers": [
			"GT_TEST_ASP"
		],
		"birthDate": "1992-10-31",
		"idDocumentQuery": "NO",
		"firstName": "",
		"populationType": "HSH",
		"ethnicGroup_GT": "mestizo",
		"archetype": "popurri",
		"phoneNumber": "+50222519350",
		"creditedUsers": [
			"GT_TEST_ASP"
		],
		"acquisitionSource": "index",
		"ethnicGroup": "mestizo",
		"dateOfServiceQuery": "YES",
		"age": "31",
		"preferredContactMode": "whatsApp"
	},
	"schemaVersion": "1-RC.2",
	"activities": [],
	"_id": "6658aNew_"
};

export default function ClientAddFavBtn() {

	const { clientAddFavShow } = useClientAddFavShowContext();
	const { clientList, setClientList } = useClientListContext();

	const [ showModal, setShowModal ] = useState<boolean>(false);
	const [ newClient, setNewClient ] = useState<any>({});

	const modalClose = () => {
		setShowModalWarpper(false);
	};

	const setShowModalWarpper = ( isTrue: boolean ) => {
			setShowModal(isTrue);
	};

	const setClientValue = (proName:string, value:string) => {
		const temp = JSON.parse(JSON.stringify(newClient));
		temp[proName] = value;
		setNewClient( temp );
	}

	const saveNewClient = () => {

		const newClientJson = JSON.parse( JSON.stringify( clientTemplate ) );

		newClientJson.clientDetails.firstName = newClient.firstName;
		newClientJson.clientDetails.lastName = newClient.lastName;
		newClientJson._id += new Date().getTime();

		setClientList( [...clientList, newClientJson] );

		alert( 'data saved' );

		modalClose();
	};


	return (
		<>
		{
			( clientAddFavShow ) ? <button className="fixed bottom-3 right-1 w-12 h-12 bg-sal bg-orange-400 hover:bg-orange-600 text-black rounded-full shadow-lg flex items-center justify-center text-2xl"
			onClick={()=> { setShowModalWarpper(true); } }> + </button>
			: <></>
		}
			<Modal isVisible={showModal} onClose={modalClose}>
				<div className="bg-white rounded-lg shadow-lg p-2 flex flex-col justify-start items-start">
					<div><h2 className="font-semibold text-gray-600 mb-3">Add New Client</h2></div>
					<div className="pl-4">
						<div>firstName: <input className="text-xs m-2" 
							value={newClient.firstName}
							onChange={(e) => setClientValue( 'firstName', e.target.value ) }
							></input></div>
						<div>lastName: <input className="text-xs m-2"
							value={newClient.lastName}
							onChange={(e) => setClientValue( 'lastName', e.target.value ) }						
							></input></div>
						<div>
							<button className="rounded-lg p-2 bg-blue-400 m-2 text-white"
							onClick={(e) => { saveNewClient(); } }
							>Add</button> 
							<button className="rounded-lg p-2 bg-blue-400 m-2 text-white" onClick={() => { modalClose();} }>Cancel</button>
						</div>
					</div>
				</div>
			</Modal>

		</>
	);
};