'use client';

import { createContext, useState, useContext } from 'react';

type LoggedInContext = {
	loggedIn: boolean,
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
};

const LoggedInContext = createContext<LoggedInContext | null>(null);

export function LoggedInContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ loggedIn, setLoggedIn ] = useState( false );

	return (
		<LoggedInContext.Provider value={ {loggedIn, setLoggedIn } }>
			{ children }
		</LoggedInContext.Provider>
	);
}

// Custom Hook?
export function useLoggedInContext() {
	const context = useContext(LoggedInContext);
	if ( !context) throw new Error( "useLoggedInContext must be used within a -Provider");

	return context;
}