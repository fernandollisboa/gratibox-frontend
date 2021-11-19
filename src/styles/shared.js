import styled from "styled-components";

export const PageTitle = styled.div`
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	padding-bottom: 20px;
	color: white;

	& > strong {
		font-weight: 700;
	}
`;

export const PageWrapper = styled.div`
	background-image: ${(props) => props.backgroundGradient};
	color: var(--color--1);
	width: 100%;
	max-width: 100vw;
	margin-top: 53px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
