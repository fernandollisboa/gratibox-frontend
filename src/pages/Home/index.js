import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageDescription, PageWrapper, PageTitle } from "../../styles/shared";
import image from "../../../src/assets/image05.webp";

const Home = () => {
	const navigate = useNavigate();
	return (
		<PageWrapper>
			<PageTitle>
				Bem-vindo ao <strong>GratiBox</strong>
			</PageTitle>
			<PageDescription>
				Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...
			</PageDescription>
			<Image src={image} />
			<ButtonsContainer>
				<SignupButton onClick={() => navigate("/sign-up")}>Quero começar</SignupButton>
				<LoginButton onClick={() => navigate("/login")}>Já sou grato</LoginButton>
			</ButtonsContainer>
		</PageWrapper>
	);
};

export default Home;

const Image = styled.img`
	height: 50%;
	width: 100%;
	@media screen and(min-width: 900px) {
		width: 80%;
		height: 80%;
	}
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
		font-weight: 700;
		cursor: pointer;
		width: 60%;
		padding: 4% 5%;
		color: var(--color-4);
	}
`;

const SignupButton = styled.button`
	font-family: "Roboto", sans-serif;
	background-color: #8c97ea;
	border: none;
	border-radius: 5px;
	margin-bottom: 5px;
	font-size: 25px;
`;

const LoginButton = styled.button`
	font-size: 23px;
	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	height: 100%;
`;
