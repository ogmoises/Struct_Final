// layout.tsx
"use client"; // Adicione isso para tornar o componente um Client Component

import React from 'react';
import { AuthProvider } from '../server/authContext';
import { SessionProvider } from 'next-auth/react';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>XStock</title>
          </head>
          <body>
            {children}
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}

export default RootLayout;
