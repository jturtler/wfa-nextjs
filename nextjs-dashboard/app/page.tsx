import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
  <div className="h-[100vh] overflow-hidden">
    <div className="divTopNav h-[30px] bg-blue-300 p-1 text-white">INFO</div>
    <div className="divMiddleContent flex">
      <div className="divSiceNav w-10 hidden bg-gray-700 text-gray-300 p-1">m1</div>
      <div className="divMainList m-1 grid h-[calc(100vh-68px)] flex-1 content-start gap-1 overflow-x-auto border-0 border-gray-400 md:grid-cols-2">
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg text-gray-700">1</div>
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg">2</div>
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg">3</div>
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg">4</div>
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg">5</div>
        <div className="m-1 min-h-[100px] rounded-lg bg-gray-200 p-2 shadow-lg">6</div>
      </div>
    </div>
    <div className="divBottomTop h-[30px] bg-gray-900 p-1 text-xs text-white">Version 1.2.0</div>
  </div>
  );
}
