'use client';

import { createContext, useState, useContext } from 'react';

type ClientAddFavShowContext = {
	clientAddFavShow: boolean,
	setClientAddFavShow: React.Dispatch<React.SetStateAction<boolean>>
};

const ClientAddFavShowContext = createContext<ClientAddFavShowContext | null>(null);

export function ClientAddFavShowContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ clientAddFavShow, setClientAddFavShow ] = useState( true );

	return (
		<ClientAddFavShowContext.Provider value={ {clientAddFavShow, setClientAddFavShow } }>
			{ children }
		</ClientAddFavShowContext.Provider>
	);
}

// Custom Hook?
export function useClientAddFavShowContext() {
	const context = useContext(ClientAddFavShowContext);
	if ( !context) throw new Error( "useClientAddFavShowContext must be used within a -Provider");

	return context;
}