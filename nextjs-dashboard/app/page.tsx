'use client';

import AppMain from './ui/appMain';
import { AuthProvider } from './contexts/AuthContext';
import { ClientProvider } from './contexts/ClientContext';
import { MainUiProvider } from './contexts/MainUiContext';

export default function Page() {
  return (
    <main className="mainPage">
      <MainUiProvider>
          <AuthProvider>
            <ClientProvider>
              <AppMain></AppMain>
            </ClientProvider>
          </AuthProvider>
        </MainUiProvider>
    </main>
  );
}
