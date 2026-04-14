import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../../features/auth/stores/authStore';

export default function AuthGuard() {
  const tokens = useAuthStore((s) => s.tokens);
  const location = useLocation();

  // DESATIVADO TEMPORARIAMENTE PARA TESTES
  /*
  if (!tokens?.tokenAcesso) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  */

  // Como o "if" acima está comentado, ele ignora a falta de token 
  // e libera o acesso renderizando a rota solicitada.
  return <Outlet />;
}