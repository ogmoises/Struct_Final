"use client";

import React from 'react';
import { useAuth } from '../../../server/authContext';
import '~/styles/conta.css';
import Link from 'next/link';

const Conta = () => {
  const { user, isLoading, logout } = useAuth();

  // Verificar se o estado está carregando
  if (isLoading) {
    return;
  }

  // Verificar se o usuário está autenticado
  if (!user) {
    return <p>Você precisa estar logado para acessar esta página.</p>;
  }

  return (
    <div className="account-container">
      <h1>Seja bem-vindo, {user.email}!</h1>
      {/* Adicione outras informações e funcionalidades da conta aqui */}
      <button onClick={logout} className="logout-button">Logout</button>  {/* Botão de logout */}
      <div className="home-link">
        <Link href="/">Voltar à página inicial</Link>
      </div>
    </div>
  );
};

export default Conta;
