"use client";
import React from 'react';
import Header from "./_components/Header"
import { AuthProvider } from '../server/authContext';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header/>
      <main>{children}</main>
    </AuthProvider>
  )
}