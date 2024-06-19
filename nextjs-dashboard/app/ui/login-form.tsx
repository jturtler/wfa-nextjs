import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { CiUser } from "react-icons/ci";
import { useLoggedInContext } from '../contexts/loggedInContext';
import { useState } from 'react';
import { useLoginUserContext } from '../contexts/loginUserContext';
import { useClientListContext } from '../contexts/clientListContext';

export default function LoginForm() {

  const { loggedIn, setLoggedIn } = useLoggedInContext();
  const { username, setUsername, pin, setPin } = useLoginUserContext();
	const { setClientList } = useClientListContext();

  let usernameTemp = username;
  let pinTemp = pin;

  const loginBtnClick = () => {
    setUsername( usernameTemp );
    setPin( pinTemp );    
    setLoggedIn( true );

		//getClientsList();

    console.log( 'loginBtn Clicked - In state set: username, pin, loggedIn ');
  };

  /*
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
  */

  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="username"
                name="username"
                value={username}
                placeholder="Enter your username"
                required
                onChange={ (e) => { usernameTemp = e.target.value; } }
              />
              <CiUser className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"></CiUser>
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="pin"
            >
              Pin
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="pin"
                type="password"
                name="pin"
                value={pin}
                placeholder="Enter pin"
                required
                minLength={4}
                onChange={ (e) => { pinTemp = e.target.value; } }
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton clickCallBack={ loginBtnClick } />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton( { clickCallBack }: { clickCallBack: () => void } ) {

  return (
    <Button className="mt-4 w-full" onClick={ (e) => { clickCallBack(); } }>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
