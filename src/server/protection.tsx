// protection.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '~/server/authContext';
import { useRouter } from 'next/navigation';
import "~/styles/protection.css";

interface ProtectedRouteProps {
  children: ReactNode;
}

const Protection: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        router.push('/login');
      }, 2000);
      return () => clearTimeout(timer); // Limpeza do timeout
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div>
        {showMessage && (
          <div className="popup-message">
            <p>Você não tem as permissões necessárias para acessar esta página.</p>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

export default Protection;
