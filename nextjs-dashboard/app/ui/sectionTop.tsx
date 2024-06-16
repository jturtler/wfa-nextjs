'use client';

// import { useLoginUserContext } from "../contexts/loginUserContext";
import { IoMenuOutline } from "react-icons/io5";
import Modal from "./modal";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useAppContext from "../contexts";
import * as Constant from "@/app/lib/constants";

export default function SectionTop() {

	// const { username } = useLoginUserContext();
	
	const { user, logout, setMainUi } = useAppContext();
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleOnLogout = () => {
		const ok = confirm("Are you sure you want to log-out ?");
		if( ok ) {
			logout();
			setMainUi(Constant.UI_LOGIN_PAGE);
		}
	}
	const onClose = () => {
		setIsVisible(false);
	};

	return (
		<>
			<div className="divTopNav h-[50px] bg-blue-700 p-1 grid grid-cols-2">
				<div className="flex justify-start items-center">
					<IoMenuOutline className="text-2xl font-bold cursor-pointer hover:bg-blue-500" onClick={(e) => setIsVisible(true)} />
					<div className="text-white ml-2 font-light"><span>[ {user?.username} ]</span></div>
				</div>
				<div>
				</div>
			</div>
			<Modal isVisible={isVisible} onClose={onClose}>
				<div className="w-1/3 min-w-[150px] h-screen bg-white p-1 absolute left-0 top-0">
					<div className="flex justify-end">
						<div className="inline-block ml-2 hover:bg-blue-200 p-1 cursor-pointer font-bold " onClick={(e) => onClose()}>X</div>
					</div>
					<div className="grid gap-2 p-1">
						<div className="cursor-pointer rounded-md bg-blue-100 p-2 text-sm font-semibold text-gray-600 shadow-md hover:bg-blue-200">Client list</div>
						<div className="cursor-pointer rounded-md bg-blue-100 p-2 text-sm font-semibold text-gray-600 shadow-md hover:bg-blue-200" onClick={() => handleOnLogout()}>Logout</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

/*function SidebarItem( ) {
	return (
		<></>
	);
}*/