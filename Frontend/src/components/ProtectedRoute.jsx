import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../services/auth';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 