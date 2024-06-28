import { useState } from "react";
import { Button } from "./button";
import { useClientListContext } from "../contexts/clientListContext";

export default function ClientProfile({ client }: { client: any }) {

	const clientProfile = ( client.clientDetails )? client.clientDetails: {};
	// if ( !clientProfile ) clientProfile = {};

	const [editMode, setEditMode] = useState(false);
	const [profile, setProfile] = useState<any>(clientProfile);
	const { updateClientProfile } = useClientListContext();


	// Make it Generic? --> By field list array, saving part? function call?

	// 1. data populate
	// 2. Edit Mode - switch (button, fields, etc..)

	// 3. Fields Component

	const saveClientProfile = () => {

		client.clientDetails = profile;

		updateClientProfile( client._id, client );

		setEditMode( false );

		alert( 'data saved' );
	};

	const setProfileValue = (proName:string, value:string) => {
		const temp = JSON.parse(JSON.stringify(profile));
		temp[proName] = value;
		setProfile( temp );
	}
	return (
		<>
			<div className="bg-gray-100">
				<div className="w-full shadow-md rounded-md bg-white min-w-[300px] min-h-[400px] p-4 m-2">
					<div className="relative flex items-center p-5">
						<h1 className="absolute text-2xl font-bold">Client Profile</h1>
						{ (!editMode) ? <div className="ml-auto cursor-pointer hover:bg-blue-200" onClick={ (e) => setEditMode(true)}>
							<img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" width="20"></img>
						</div> : <></>
						}
						
					</div>
					<div>
						<div className="mb-5">
							<label htmlFor="firstName" className="text-gray-900 font-medium m-2 block text-sm">FirstName<span className="text-red-600">*</span></label>
							<input id="firstName" type="text" className="block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" placeholder="FirstName" 
							disabled={!editMode}
							value={profile.firstName}
							onChange={(e) => setProfileValue( 'firstName', e.target.value ) }
							></input>
						</div>
						<div className="mb-5">
							<label htmlFor="lastName" className="text-gray-900 font-medium m-2 block text-sm">LastName<span className="text-red-600">*</span></label>
							<input id="lastName" type="text" className="block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" placeholder="LastName" 
							disabled={!editMode}
							value={profile.lastName}
							onChange={(e) => setProfileValue( 'lastName', e.target.value ) }
							></input>
						</div>
						<div className="mb-5">
							<label htmlFor="phoneNumber" className="text-gray-900 font-medium m-2 block text-sm">PhoneNumber<span className="text-red-600">*</span></label>
							<input id="phoneNumber" type="text" className="block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" placeholder="PhoneNumber" 
							disabled={!editMode}
							value={profile.phoneNumber}
							onChange={(e) => setProfileValue( 'phoneNumber', e.target.value ) }
							></input>
						</div>
					</div>
					{ (editMode) ? <div className="flex">
						<Button className="flex-1 justify-center mx-5" onClick={ (e) => { saveClientProfile() } }>
							Save
						</Button>
						<Button className="flex-1 justify-center mx-5" onClick={ (e) => setEditMode(false) }>
							Cancel
						</Button>
						</div> : <></>
					}
				</div>
			</div>
		</>
	);
};


function LoginButton( { clickCallBack }: { clickCallBack: () => void } ) {

	return (
	  <Button className="mt-4 w-full" onClick={ (e) => { clickCallBack(); } }>
		 Save
	  </Button>
	);
 }
 