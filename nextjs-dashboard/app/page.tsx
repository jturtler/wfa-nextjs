'use client';

import AppMain from './ui/appMain';
import { AuthProvider } from './contexts/AuthContext';

export default function Page() {
  return (
    <main className="mainPage">
        <AuthProvider>
          <AppMain></AppMain>
        </AuthProvider>
    </main>
  );
}
