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
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return;
  }

  if (!user) {
    return (  
      <div>
        {showMessage && (
          <div className="popup-message">
            <p>Você não tem as permissões necessárias para acessar esta página.</p>
          </div>
        )}
        {/* O restante do conteúdo será exibido após a autenticação */}
      </div>
    );
  }

  return <>{children}</>;
};

export default Protection;
