import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { CiUser } from "react-icons/ci";
// import { useLoggedInContext } from '../contexts/loggedInContext';
// import { useLoginUserContext } from '../contexts/loginUserContext';
import { useAuth } from '../contexts/AuthContext';
// import { useState } from 'react';

export default function LoginForm() {

  const { user, login, loading, error } = useAuth();

  let username = "test1";
  let pin = "1234";

  const loginBtnClick = () => {
    login(username, pin);
  };

  return (
    <div className="space-y-3">
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
                id="email"
                type="username"
                name="username"
                value="test1"
                placeholder="Enter your username"
                required
                onChange={(e) => { username = e.target.value }}
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
                placeholder="Enter pin"
                value="1234"
                required
                minLength={4}
                onChange={(e) => { pin = e.target.value }}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton loginBtnClick={loginBtnClick} />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </div>
  );
}

function LoginButton( {loginBtnClick}: {loginBtnClick: () => void } ) {

  return (
    <Button className="mt-4 w-full" onClick={ (e) => { loginBtnClick(); } }>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
