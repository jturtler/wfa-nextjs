'use client';

import { useLoginUserContext } from "../contexts/loginUserContext";
import Modal from "./modal";
import { useState } from "react";
import { IoMenuOutline, IoArrowBack } from "react-icons/io5";

export default function SectionTop( { menuIconMode, title, backArrowClick }: { menuIconMode:boolean, title?:string, backArrowClick: () => void } ) {

	const { username } = useLoginUserContext();
	const [ showModal, setShowModal ] = useState<boolean>(false);

	const onModalClose = () => { setShowModal(false); };

	return (
		<>
			<div className="divTopNav h-[30px] bg-blue-700 p-1 grid grid-cols-2">
				<div className="flex justify-start items-center">
					{
						( menuIconMode ) ? 
						<IoMenuOutline className="text-2xl font-bold cursor-pointer hover:bg-blue-500" onClick={(e) => setShowModal(true)}></IoMenuOutline> 
						:
						<IoArrowBack className="text-2xl font-bold cursor-pointer hover:bg-blue-500" onClick={ (e) => backArrowClick() }></IoArrowBack>
					}
					<div className="text-white ml-2 font-light"> <span className="font-semibold">{title}</span> <span className="italic text-blue-400"> [ {username} ]</span></div>
				</div>
				<div>
				</div>
			</div>
			<Modal isVisible={showModal} onClose={onModalClose}>
				<div className="bg-white absolute left-0 top-0 w-1/3 h-screen min-w-[150px] p-1">
					<div className="flex justify-end">
						<div className="font-bold cursor-pointer mr-1 px-2 hover:bg-blue-200" onClick={ (e) => onModalClose() }>X</div>
					</div>
					<div className="grid gap-2 p-1">
					<div className="bg-blue-100 hover:bg-blue-200 p-2 shadow-md cursor-pointer font-semibold text-gray-600 rounded-md">menu 1</div>
					<div className="bg-blue-100 hover:bg-blue-200 p-2 shadow-md cursor-pointer font-semibold text-gray-600 rounded-md">menu 2</div>
					</div>
				</div>
			</Modal>
		</>
	);
};
