'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from './ui/login-form';
import AppMain from './ui/appMain';
import { LoggedInContextWrapper } from './contexts/loggedInContext';

export default function Page() {
  return (
    <main className="mainPage">
      <LoggedInContextWrapper>
        <AppMain></AppMain>
      </LoggedInContextWrapper>    
    </main>
  );
}
