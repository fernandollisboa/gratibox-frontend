import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Signup from "./pages/Signup";
import Subscribe from "./pages/Subscribe";
import MyPlan from "./pages/MyPlan";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-up" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/plans" element={<Plans />} />
					<Route path="/subscribe" element={<Subscribe />} />
					<Route path="/my-plan" element={<MyPlan />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
