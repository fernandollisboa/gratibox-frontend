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
				<Route exact path="/" element={<Home />} />
				<Route exact path="/sign-up" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/plans" element={<ProtectedRoute />}>
					<Route exact path="/plans" element={<Plans />} />
				</Route>
				<Route exact path="/subscribe" element={<ProtectedRoute />}>
					<Route exact path="/subscribe" element={<Subscribe />} />
				</Route>
				<Route exact path="/my-plan" element={<ProtectedRoute />}>
					<Route exact path="/my-plan" element={<MyPlan />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
