import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/sign-up" element={<Signup />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
