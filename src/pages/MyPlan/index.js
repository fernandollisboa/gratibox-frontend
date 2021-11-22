import dayjs from "dayjs";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getUserSignature } from "../../services/plan";
import { PageWrapper, SubscriptionWrapper, PageDescription } from "../../styles/shared";
import Greeting from "../../components/Greeting";
import image from "../../assets/image03.jpg";
import StyledLoader from "../../components/Loader";

const MyPlan = () => {
	const token = localStorage.getItem("token");
	const [isLoading, setIsLoading] = useState(true);
	const [userPlan, setUserPlan] = useState({
		id: "",
		type: "",
		createdAt: "",
		deliveryRateId: "",
		products: [],
	});
	const periodOfTime = userPlan.type === "MONTH" ? 30 : 7;

	function returnPlanType() {
		if (userPlan.type === "MONTH") return "Mensal";
		if (userPlan.type === "WEEKL") return "Semanal";
	}

	function checkSignature() {
		console.log(token);
		getUserSignature({ token })
			.then((res) => {
				const { id, type, created_at, deliveryRateId, products } = res.data;
				setUserPlan({ id, type, createdAt: created_at, deliveryRateId, products });
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				console.log(err);
				if (err.response.status === 404) alert("sem assinatura");
				setIsLoading(false);
			});
	}
	useEffect(checkSignature, [token]);

	function businessDay(date) {
		if (dayjs(date).day() === 6) return dayjs(dayjs(date).add(2, "days").format());

		if (dayjs(date).day() === 0) return dayjs(dayjs(date).add(1, "days").format());

		return dayjs(date).format();
	}

	return (
		<PageWrapper>
			<Greeting />
			<PageDescription>“Agradecer é arte de atrair coisas boas”</PageDescription>
			<SubscriptionWrapper>
				<img src={image} alt="woman medidating in a room" />
				{isLoading ? (
					<StyledLoader />
				) : (
					<>
						<Deliveries>
							<p>
								<span className="label">Plano: </span>
								{returnPlanType()}
							</p>
							<p>
								<span className="label">Data de assinatura: </span>
								{dayjs(userPlan?.startDate).format("DD/MM/YYYY")}
							</p>
							<p>
								<span className="label">Próximas entregas:</span>
								<li>
									{dayjs(businessDay(dayjs(userPlan?.startDate).add(periodOfTime, "days"))).format(
										"DD/MM/YYYY"
									)}
								</li>
								<li>
									{dayjs(
										businessDay(dayjs(userPlan?.startDate).add(periodOfTime * 2, "days"))
									).format("DD/MM/YYYY")}
								</li>
								<li>
									{dayjs(
										businessDay(dayjs(userPlan?.startDate).add(periodOfTime * 3, "days"))
									).format("DD/MM/YYYY")}
								</li>
							</p>
						</Deliveries>
						<Products>
							{userPlan?.products?.map((product, index) => (
								<p key={index}>{product}</p>
							))}
						</Products>
					</>
				)}
			</SubscriptionWrapper>
		</PageWrapper>
	);
};

const Deliveries = styled.div`
	font-weight: 700;
	line-height: 120%;
	overflow-y: scroll;
	p {
		margin-top: 5px;
		color: #e63c80;
	}
	li {
		padding-top: 1%;
		list-style-type: none;
		padding-left: 15%;
	}
`;

const Products = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	p {
		font-size: 17px;
		font-weight: 400;
	}
`;

export default MyPlan;
