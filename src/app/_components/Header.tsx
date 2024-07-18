import React from 'react';
import '~/styles/header.css';
import { useAuth } from '../../server/authContext';

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
            <a href="/conta">Conta</a>
            <a href="#" onClick={(e) => { 
              e.preventDefault();
              logout(); 
            }} className="nav-link">Logout</a>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
};

export default Header;