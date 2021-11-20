import styled from "styled-components";
import { useState } from "react";
import { PageWrapper, PageTitle } from "../../styles/shared";
import StyledLoader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [name, setname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	function signUp(e) {
		e.preventDefault();
		setIsLoading(true);
		console.log(name, email, password, confirmPassword);
	}

	return (
		<PageWrapper>
			<PageTitle>
				Bem-vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<SignupForm onSubmit={signUp}>
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
				<button type="submit" className="signer" onClick={signUp}>
					{isLoading ? <StyledLoader /> : "Cadastrar"}
				</button>
			</SignupForm>
			<HomeButton onClick={() => navigate("/")}>Voltar Para Login</HomeButton>
		</PageWrapper>
	);
};

export default Signup;

const SignupForm = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	flex: 1;

	input {
		height: 58px;
		width: 100%;
		border-radius: 10px;
		border: none;
		outline: none;
		color: #604848;
		margin: 7px 0px;
		padding: 15px;
		font-size: 20px;
		max-width: 89%;
	}

	button {
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		outline: none;
		width: 100%;
		max-width: 300px;
		font-weight: 700;
		font-size: 32px;
		border-radius: 10px;
		background-color: #8c97ea;
		color: #fff;
		padding: 10px 20px;
		margin-top: 20px;
		cursor: pointer;
	}
`;

const HomeButton = styled.button`
	font-weight: 500;
	cursor: pointer;
	width: 60%;
	padding: 4% 5%;
	color: var(--color-4);
	font-size: 20px;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	height: 100%;
	padding-bottom: 30vw;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgb(77, 101, 168);
	flex: 1;
	padding-bottom: 13%;

	button {
	}
`;
