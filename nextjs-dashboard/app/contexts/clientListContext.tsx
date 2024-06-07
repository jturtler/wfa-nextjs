'use client';

import { createContext, useState, useContext } from 'react';

type ClientList = {
	clientList: Array<any>,
	setClientList: React.Dispatch<React.SetStateAction<any>>,
}

const ClientListContext = createContext<ClientList | undefined>(undefined);

export function ClientListContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ clientList, setClientList ] = useState( [] );

	return (
		<ClientListContext.Provider value={ {clientList, setClientList } }>
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