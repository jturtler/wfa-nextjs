'use client';

import { useClientListContext } from "../contexts/clientListContext";
import { useLoginUserContext } from "../contexts/loginUserContext";
import ClientCard from "./clientCard";

export default function Listing() {

	const { clientList } = useClientListContext();
	const { username } = useLoginUserContext();

	console.log( 'Listing rendering' );

	return (
		<div className="h-[100vh] overflow-hidden">
			<div className="divTopNav h-[30px] bg-blue-300 p-1 text-white">
				INFO - { username }
			</div>
			<div className="divMiddleContent flex">
				<div className="divSiceNav w-10 hidden bg-gray-700 text-gray-300 p-1">m1</div>
				<div className="divMainList m-1 grid h-[calc(100vh-68px)] flex-1 content-start gap-1 overflow-x-auto border-0 border-gray-400 md:grid-cols-2">
					{ clientList?.map( (client) => (
						<ClientCard client={client}></ClientCard>
					))}
				</div>
			</div>
			<div className="divBottomTop h-[30px] bg-gray-900 p-1 text-xs text-white">Version 1.2.0</div>
		</div>
	);
}