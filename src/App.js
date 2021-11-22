import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Signup from "./pages/Signup";
import MyPlan from "./pages/MyPlan";
import Subscribe from "./pages/Subscribe";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/sign-up" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/plans" element={<Plans />} />
				<Route exact path="/subscribe" element={<Subscribe />} />
				<Route exact path="/my-plan" element={<MyPlan />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
