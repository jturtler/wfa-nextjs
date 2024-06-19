'use client';

import { useEffect, useState } from "react";
import { useClientListContext } from "../contexts/clientListContext";
import ClientCard from "./clientCard";
import SectionTop from "./sectionTop";

export default function Listing() {

	const [ clientList, setClientList ] = useState<Array<any>>([]);
	// const { clientList } = useClientListContext();

	const getClientsList = () => {
		fetch( 'clients.json', {
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			  }
		}).then( function( resp ) {
			console.log( resp );
			return resp.json();
		}).then( function( returnJson ) {
			console.log( returnJson );
			setClientList( returnJson );
		});
	};

	useEffect( () => {
		getClientsList();
	}, []);
	
	console.log( 'Listing rendering' );

	return (
		<div className="h-[100vh] overflow-hidden">
			<SectionTop></SectionTop>
			<div className="divMiddleContent flex">
				<div className="divSiceNav w-10 hidden bg-gray-700 text-gray-300 p-1">m1</div>
				<div className="divMainList m-1 grid h-[calc(100vh-68px)] flex-1 content-start gap-1 overflow-x-auto border-0 border-gray-400 md:grid-cols-2">
					{ clientList.map( (client, index) => (
						<ClientCard client={client} key={index}></ClientCard>
					))}
				</div>
			</div>
			<div className="divBottomTop h-[30px] bg-gray-900 p-1 text-xs text-white">Version 1.2.0</div>
		</div>
	);
}