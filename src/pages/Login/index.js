import { useState } from "react";
import styled from "styled-components";
import { PageTitle } from "../../styles/shared";
import StyledLoader from "../../components/Loader";

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function checkCredentials() {
		setIsLoading(true);
		console.log(email, password);
	}

	return (
		<LoginContainer>
			<PageTitle>
				Bem-vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<input
				type="email"
				placeholder="E-mail"
				required
				onChange={(e) => setEmail(e.target.value)}
				disabled={isLoading}
				value={email}
			/>
			<input
				type="password"
				placeholder="Password"
				required
				onChange={(e) => setPassword(e.target.value)}
				disabled={isLoading}
				value={password}
			/>
			<button className="signer" onClick={checkCredentials}>
				{isLoading ? <StyledLoader /> : "Login"}
			</button>
		</LoginContainer>
	);
};

export default Login;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 25px 0px 25px;
	input {
		height: 58px;
		width: 100%;
		border-radius: 10px;
		border: none;
		outline: none;
		margin: 7px 0px;
		padding: 15px;
		font-size: 20px;
		max-width: 350px;
	}
	.signer {
		border: none;
		outline: none;
		height: 46px;
		width: 100%;
		max-width: 350px;
		font-family: "Raleway", sans-serif;
		border-radius: 5px;
		background-color: #8c97ea;
		font-size: 17px;
		color: #fff;
		font-weight: bolder;
		margin: 20px 0px 0px 0px;
		cursor: pointer;
		max-width: 200px;
	}
	.toggler {
		color: #fff;
		font-size: 15px;
		font-weight: 700;
		margin-top: 20px;
		cursor: pointer;
		background-color: inherit;
		border: none;
		outline: none;
	}
`;
