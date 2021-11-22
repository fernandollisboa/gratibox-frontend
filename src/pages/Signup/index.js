import { useState } from "react";
import { PageWrapper, PageTitle, AuthForm, HomeButton } from "../../styles/shared";
import StyledLoader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../services/auth";

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
		if (password !== confirmPassword) {
			alert("As senhas não coincidem!");
			setIsLoading(false);
			return;
		}
		postSignup({ name, email, password, confirmPassword })
			.then((res) => {
				alert("Usuário criado com sucesso!");
				navigate("/");
			})
			.catch((err) => {
				if (err.response.status === 409) {
					alert("E-mail já cadastrado!");
				}

				if (err.response.status === 400) {
					alert("Preencha os campos corretamente!");
				}

				if (err.response.status === 500) {
					alert("Houve um erro no servidor");
				}

				setIsLoading(false);
			});
	}

	return (
		<PageWrapper>
			<PageTitle>
				Bem-vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<AuthForm onSubmit={signUp}>
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
				<button type="submit">{isLoading ? <StyledLoader /> : "Cadastrar"}</button>
			</AuthForm>
			<HomeButton onClick={() => navigate("/login")}>Ir Para Login</HomeButton>
		</PageWrapper>
	);
};

export default Signup;
