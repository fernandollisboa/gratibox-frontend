import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { PageDescription, PageWrapper } from "../../styles/shared";
import styled from "styled-components";
import weeklyPlanBackground from "../../assets/image04.jpg";
import monthlyPlanBackground from "../../assets/image02.jpg";
import Greeting from "../../components/Greeting";
import { getUserSignature } from "../../services/plan";
import StyledLoader from "../../components/Loader";

const Plans = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const token = localStorage.getItem("token");

	function checkSignature() {
		getUserSignature({ token })
			.then(() => navigate("/my-plan"))
			.catch((err) => {
				if (err.response.status === 404) alert("sem assinatura");
				setIsLoading(false);
			});
	}
	useEffect(checkSignature, [token, navigate]);

	return (
		<PageWrapper>
			<Greeting />
			{isLoading ? (
				<StyledLoader />
			) : (
				<>
					<PageDescription>Você ainda não assinou um plano, que tal começar agora?</PageDescription>
					<SignPlan>
						<img src={weeklyPlanBackground} alt="woman medidating in a room" />
						<h3>
							Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.
						</h3>
						<Button disabled={isLoading} onClick={() => navigate("/subscribe")}>
							Assinar
						</Button>
					</SignPlan>
					<SignPlan>
						<img src={monthlyPlanBackground} alt="woman medidating in a room by other angle" />
						<h3>Você recebe um box por mês. Ideal para quem está começando agora.</h3>
						<Button disabled={isLoading} onClick={() => navigate("/subscribe")}>
							Assinar
						</Button>
					</SignPlan>{" "}
				</>
			)}
		</PageWrapper>
	);
};

export default Plans;

const SignPlan = styled.div`
	background-color: #e5cdb3;
	border-radius: 25px;
	width: 358px;
	height: 400px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	h3 {
		color: #4d65a8;
		font-size: 18px;
		font-weight: 700;
		padding: 0 22px;
		margin: 20px 0;
	}
	img {
		width: 100%;
		height: 60%;
		object-fit: cover;
		border-radius: 25px;
	}
	margin-bottom: 20px;
`;

export const Button = styled.button`
	width: 202px;
	height: 45px;
	border-radius: 10px;
	border: none;
	color: white;
	font-weight: 700;
	font-size: 18px;
	background-color: #8c97ea;
`;
