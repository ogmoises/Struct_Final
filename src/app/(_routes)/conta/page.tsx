"use client";

import React from 'react';
import Protection from '~/server/protection';
import '~/styles/conta.css';
import Link from 'next/link';
import Header from '~/app/_components/Header';
import { useAuth } from '~/server/authContext';

const Conta: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Protection>
       <div className="account-container">
        <Header />
        <h1>Seja bem-vindo, {user?.email}!</h1>
        <button onClick={logout} className="logout-button">Logout</button>
        <div className="home-link">
          <Link href="/">Voltar à página inicial</Link>
        </div>
      </div>
    </Protection>
  );
};

export default Conta;
