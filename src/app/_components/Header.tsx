import React from 'react';
import '~/styles/header.css';
import { useAuth } from '../../server/authContext';
import Link from 'next/link';

const Header: React.FC = () => {
  const {user,logout, isLoading} = useAuth();

  if (isLoading) {
    return;
  }

  return (
    <header className="header">
      <Link className="logo" href="/">XS</Link>
      <nav className="navbar">
        <Link href="/">Início</Link>
        {user ? (
          <>
            <Link href="/conta">Conta</Link>
            <Link href="/crud">Crud</Link>
            <a onClick={(e) => { 
              e.preventDefault();
              logout(); 
            }} className="nav-link">Logout</a>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;