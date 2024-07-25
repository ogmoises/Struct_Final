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
      <a className="logo" href="#">XS</a>
      <nav className="navbar">
        <a href="#">Início</a>
        <a href="#redesfooter">Contato</a>
        {user ? (
          <>
            <Link href="/conta">Conta</Link>
            <a href="#" onClick={(e) => { 
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