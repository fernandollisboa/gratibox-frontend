import styled from "styled-components";

export const PageTitle = styled.div`
	font-size: 35px;
	font-weight: 500;
	text-align: center;
	padding: 20px 5px 20px 5px;
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
