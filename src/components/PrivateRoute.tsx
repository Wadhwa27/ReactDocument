import { Navigate, Outlet } from "react-router-dom";
import { getActiveUser } from "../LocalStorage";
export default function PrivateRoute() {
  const ActiveUser = getActiveUser();
  console.log("Active User", ActiveUser);
  return ActiveUser ? <Outlet /> : <Navigate to="/" replace />;
}
