import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageWrapper, PageTitle } from "../../styles/shared";
import image from "../../../src/assets/image05.webp";

const Home = () => {
	const navigate = useNavigate();
	return (
		<PageWrapper backgroundGradient="linear-gradient(var(--color-0),rgb(77, 101, 168));">
			<PageTitle>
				Bem vindo ao <strong>GratiBox</strong>
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
	padding: 10px 0px;
`;

export const PageDescription = styled.span`
	font-weight: 300;
	font-size: 18px;
	text-align: center;
	color: white;
	line-height: 130%;
	padding: 0px 30px 20px 30px;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 1000px;

	button {
		font-weight: 600;
		cursor: pointer;
		font-size: 18px;
		width: 200px;
		padding: 10px 20px;
		color: var(--color-4);
	}
`;

const SignupButton = styled.button`
	font-family: "Roboto", sans-serif;
	background-color: #8c97ea;
	align-self: center;
	border: none;
	border-radius: 5px;
	margin-bottom: 5px;
`;

const LoginButton = styled.button`
	background: transparent;
	align-self: center;
	border: none;
	margin-bottom: 20px;
`;
