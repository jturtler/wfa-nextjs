'use client';

import LoginForm from "./login-form";
import Listing from "./listing";
import { useAuth } from '../contexts/AuthContext';
import SectionTop from "./sectionTop";

export default function AppMain() {

	const { user } = useAuth();

	console.log( 'AppMain Rendering: ' );
	
	return (
		<div className="divMain">
			{
				(user != null) ? (
					<>
						<SectionTop></SectionTop>
						<Listing></Listing>
					</>
				) : (
					<>
						<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
							<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
								<LoginForm></LoginForm>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 h-30 w-screen p-2 bg-gray-900 text-white text-xs">Version 0.1.1 <span className="text-gray-400">[2024-06-05]</span></div>
					</>
				)
			}
		</div>
	);
}