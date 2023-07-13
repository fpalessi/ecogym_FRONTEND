import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  children: React.ReactNode;
};

const ProtectedRoute = ({ isAllowed, children }: Props) => {
  if (!isAllowed) return <Navigate to="/login"></Navigate>;

  return <>{children}</>;
};

export default ProtectedRoute;
