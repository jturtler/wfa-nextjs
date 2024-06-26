'use client';

import { createContext, useState, useContext } from 'react';

type ClientList = {
	clientList: Array<any>,
	setClientList: React.Dispatch<React.SetStateAction<any>>,
	updateClientProfile: ( id: string, client: any ) => void
}

const ClientListContext = createContext<ClientList | undefined>(undefined);

export function ClientListContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ clientList, setClientList ] = useState<Array<any>>( [] );


	const updateClientProfile = ( id: string, client: any ) => {
		let newArr: Array<any>  = [...clientList]; // copying the old datas array

		let currClient = newArr.find( ( item:any ) => { return (item._id === id); } );
		if (!currClient) return;

		currClient.clientDetails = client.clientDetails;    //Object.keys(currClient).forEach( ( key ) => delete currClient[key] );  Object.keys(client).forEach( ( key ) => { currClient[key] = client[key]; } );

  		setClientList(newArr);
	};


	return (
		<ClientListContext.Provider value={ {clientList, setClientList, updateClientProfile } }>
			{ children }
		</ClientListContext.Provider>
	);
}

// Custom Hook?
export function useClientListContext() {
	const context = useContext(ClientListContext);
	if ( !context) throw new Error( "useClientListContext must be used within a -Provider");

	return context;
}