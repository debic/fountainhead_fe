import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
//import LoginContext from '../Context/LoginContext';
import { useUserContext } from '../Context/UserContext';

export default function PrivateRoute() {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser.email) {
      navigate("/");
    }
  }, [currentUser]);

  return currentUser.email && <Outlet />;
}
