"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);  // Estado de carregamento
    const router = useRouter();

    useEffect(() => {
      const fetchUser = async () => {
        const userData = localStorage.getItem('user');
  
        if (userData) {
          setUser(JSON.parse(userData));
        }
        setIsLoading(false);
      };
  
      fetchUser();
    }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    router.push('/'); // Redirecionamento ao fazer login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/'); // Redirecionamento ao fazer logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};