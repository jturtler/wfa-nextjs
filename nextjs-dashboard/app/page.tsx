'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from './ui/login-form';
import AppMain from './ui/appMain';
import { LoggedInContextWrapper } from './contexts/loggedInContext';
import { LoginUserContextWrapper } from './contexts/loginUserContext';
import { Provider } from "react-redux";
import { store } from "@/app/redux/rootStore";

export default function Page() {
  return (
    <Provider store={store}>
    <main className="mainPage">
        <LoggedInContextWrapper>
          <LoginUserContextWrapper>
            <AppMain></AppMain>
          </LoginUserContextWrapper>
        </LoggedInContextWrapper>    
    </main>
    </Provider>
  );
}
