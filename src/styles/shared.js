import styled from "styled-components";

export const PageTitle = styled.div`
	font-size: 35px;
	font-weight: 500;
	text-align: center;
	padding: 40px 5px 20px 5px;
	color: white;

	& > strong {
		font-weight: 700;
	}
`;

export const PageDescription = styled.span`
	font-weight: 500;
	font-size: 22px;
	text-align: center;
	color: white;
	line-height: 130%;
	padding: 0px 30px 15px 30px;
`;

export const PageWrapper = styled.div`
	color: var(--color--1);
	width: 100%;
	max-width: 100vw;
	height: 100vh;
	padding-top: 53px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const AuthForm = styled.form`
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

export const HomeButton = styled.button`
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
	padding-bottom: 40vw;
`;
