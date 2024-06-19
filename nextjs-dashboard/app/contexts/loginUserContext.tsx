'use client';

import { createContext, useState, useContext } from 'react';

type LoginUser = {
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	pin: string,
	setPin: React.Dispatch<React.SetStateAction<string>>,
	//loggedIn: boolean,
	//setLoggedIn: any
}

const LoginUserContext = createContext<LoginUser | undefined>(undefined);

export function LoginUserContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ username, setUsername ] = useState( 'james' );
	let [ pin, setPin ] = useState( '1122' );
	// let [ loggedIn, setLoggedIn ] = useState( false );

	return (
		<LoginUserContext.Provider value={ {username, setUsername, pin, setPin } }>
			{ children }
		</LoginUserContext.Provider>
	);
}

// Custom Hook?
export function useLoginUserContext() {
	const context = useContext(LoginUserContext);
	if ( !context) throw new Error( "useLoginUserContext must be used within a -Provider");

	return context;
}