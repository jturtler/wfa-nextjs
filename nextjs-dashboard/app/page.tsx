'use client';

import AppMain from './ui/appMain';
import { AuthProvider } from './contexts/AuthContext';
import { ClientProvider } from './contexts/ClientContext';

export default function Page() {
  return (
    <main className="mainPage">
        <AuthProvider>
          <ClientProvider>
            <AppMain></AppMain>
          </ClientProvider>
        </AuthProvider>
    </main>
  );
}
