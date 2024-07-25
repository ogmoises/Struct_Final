import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn(); // Redireciona para a página de login se não autenticado
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <h1>Conteúdo Protegido</h1>
        <p>Bem-vindo, {session.user.email}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return null;
}
