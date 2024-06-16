'use client';

import { useEffect, useState } from "react";
import ClientCard from "./clientCard";
import SectionTop from "./sectionTop";
import { useClients } from "../contexts/ClientContext";
import { JSONObject } from "../lib/definitions";
import * as Constant from '../lib/constants';
import { FaSpinner } from 'react-icons/fa';

export default function Listing() {

	const {processing, clientList} = useClients();
	console.log("--------------- Listing ");
	console.log(clientList);
	return (
	<div className="h-[100vh] overflow-hidden">

		{ processing == Constant.PROCESSING_CLIENT_LIST_LOADING 
			? <FaSpinner className="text-9xl" /> 
			:
			<div className="divMiddleContent flex">
				<div className="divSiceNav w-10 hidden bg-gray-700 text-gray-300 p-1">m1</div>
				<div className="divMainList m-1 grid h-[calc(100vh-68px)] flex-1 content-start gap-1 overflow-x-auto border-0 border-gray-400 md:grid-cols-2">
					{ clientList != null && clientList?.map( (client: JSONObject, index: number) => (
						<ClientCard key={client._id} client={client}></ClientCard>
					))
					}
				</div>
			</div>}
			
		<div className="divBottomTop h-[30px] bg-gray-900 p-1 text-xs text-white">Version 1.2.0</div>
	</div>
	);
}