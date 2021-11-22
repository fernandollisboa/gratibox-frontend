import { useState } from "react";
import { PageTitle, PageWrapper, AuthForm } from "../../styles/shared";
import StyledLoader from "../../components/Loader";
import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router";

const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function checkCredentials(e) {
		e.preventDefault();
		setIsLoading(true);

		postLogin({ email, password })
			.then((res) => {
				alert(`Bem-vindo, ${res.data.name}!`);
				navigate("/");
			})
			.catch((err) => {
				if (err.response.status === 403) {
					alert("E-mail e/ou senha incorreto(s)!");
				}

				if (err.response.status === 404) {
					alert("E-mail não cadastrado!");
				}
				setIsLoading(false);
			});

		console.log(email, password);
	}

	return (
		<PageWrapper>
			<PageTitle>
				Bem-vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<AuthForm onSubmit={postLogin}>
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
				<button type="submit">{isLoading ? <StyledLoader /> : "Login"}</button>
			</AuthForm>
		</PageWrapper>
	);
};

export default Login;
