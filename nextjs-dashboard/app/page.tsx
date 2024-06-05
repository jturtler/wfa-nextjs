import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from './ui/login-form';

export default function Page() {
  return (
    <>
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <LoginForm></LoginForm>   
      </div>
    </div>
    <div className="absolute bottom-0 left-0 h-30 w-screen p-2 bg-gray-900 text-white text-xs">Version 0.1.1 <span className="text-gray-400">[2024-06-05]</span></div>
    </>
  );
}
