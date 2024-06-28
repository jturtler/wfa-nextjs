'use client';

import { createContext, useState, useContext } from 'react';

type ActivityAddFavShowContext = {
	activityAddFavShow: boolean,
	setActivityAddFavShow: React.Dispatch<React.SetStateAction<boolean>>
};

const ActivityAddFavShowContext = createContext<ActivityAddFavShowContext | null>(null);

export function ActivityAddFavShowContextWrapper( { children } : { children: React.ReactNode; } ) 
{
	let [ activityAddFavShow, setActivityAddFavShow ] = useState( true );

	return (
		<ActivityAddFavShowContext.Provider value={ {activityAddFavShow, setActivityAddFavShow } }>
			{ children }
		</ActivityAddFavShowContext.Provider>
	);
}

// Custom Hook?
export function useActivityAddFavShowContext() {
	const context = useContext(ActivityAddFavShowContext);
	if ( !context) throw new Error( "useActivityAddFavShowContext must be used within a -Provider");

	return context;
}