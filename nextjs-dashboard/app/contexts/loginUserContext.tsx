'use client';

import { createContext, useState, useContext } from 'react';

type LoginUserContext = {
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	pin: string,
	setPin: React.Dispatch<React.SetStateAction<string>>
};

const LoginUserContext = createContext<LoginUserContext | null>(null);

export function LoginUserContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ username, setUsername ] = useState( '' );
	let [ pin, setPin ] = useState( '' );

	return (
		<LoginUserContext.Provider value={ { username, setUsername, pin, setPin } }>
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