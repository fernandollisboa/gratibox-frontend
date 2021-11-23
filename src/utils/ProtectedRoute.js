import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
	const token = localStorage.getItem("token");
	return token ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
