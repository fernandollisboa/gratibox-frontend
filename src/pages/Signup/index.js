import styled from "styled-components";
import { useState } from "react";

import { PageTitle } from "../../styles/shared";
import StyledLoader from "../../components/Loader";

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [name, setname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	function register() {
		setIsLoading(true);
		console.log(name, email, password, confirmPassword);
	}

	return (
		<SignupContainer>
			<PageTitle>
				Bem vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<input
				type="text"
				required
				placeholder="Name"
				onChange={(e) => setname(e.target.value)}
				value={name}
				disabled={isLoading}
			/>
			<input
				type="email"
				required
				placeholder="E-mail"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				disabled={isLoading}
			/>
			<input
				type="password"
				required
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
			<input
				type="password"
				required
				placeholder="Confirm password"
				onChange={(e) => setConfirmPassword(e.target.value)}
				value={confirmPassword}
				disabled={isLoading}
			/>
			<button className="signer" onClick={register}>
				{isLoading ? <StyledLoader /> : "Cadastrar"}
			</button>
		</SignupContainer>
	);
};

export default Signup;

const SignupContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	height: 100vh;
	overflow: hidden;
	background-color: #6d7ce4;
	position: fixed;
	width: 100%;
	top: 0;
	input {
		height: 58px;
		width: 100%;
		border-radius: 5px;
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
		font-weight: 700;
		font-size: 36px;
		font-family: "Raleway", sans-serif;
		border-radius: 5px;
		background-color: #8c97ea;
		color: #fff;
		font-weight: bolder;
		padding: 10px 20px;
		margin: 20px 0px 0px 0px;
		cursor: pointer;
		max-width: 200px;
	}
`;
