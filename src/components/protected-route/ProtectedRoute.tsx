import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../common/loading/Loading";

interface ChildrenProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      setLoading(true);

      if (user) {
        setLoading(false);
        navigate("/dashboard");
      } else {
        console.warn("You Unauthorized");
        setLoading(false);
        navigate("/login");
      }
    });

    return () => authCheck();
  }, [auth]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
