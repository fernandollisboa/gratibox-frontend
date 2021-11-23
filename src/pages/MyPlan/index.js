/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getUserSignature } from "../../services/plan";
import { PageWrapper, SubscriptionWrapper, PageDescription } from "../../styles/shared";
import Greeting from "../../components/Greeting";
import image from "../../assets/image03.jpg";
import StyledLoader from "../../components/Loader";
import { nextDay, format, addMonths, startOfMonth, add, isFuture } from "date-fns";

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
	const [deliveryDates, setDeliveryDates] = useState([]);
	const today = new Date();

	function checkSignature() {
		getUserSignature({ token })
			.then((res) => {
				const { id, type, created_at, deliveryRateId, products } = res.data;
				setUserPlan({ id, type, createdAt: created_at, deliveryRateId, products });
				console.log(deliveryRateId, type);
				calculateNextDates(deliveryRateId, type);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				if (err.response.status === 404) alert("sem assinatura");
				setIsLoading(false);
			});
	}
	useEffect(checkSignature, [token]);

	function returnPlanType() {
		if (userPlan.type === "MONTH") return "Mensal";
		if (userPlan.type === "WEEKL") return "Semanal";
	}

	function calculateNextDates(rate, type) {
		console.log("!adsdasd");
		if (type === "WEEKL") {
			let dayOfWeek;

			if (rate === 3) dayOfWeek = 1;
			if (rate === 4) dayOfWeek = 3;
			if (rate === 5) dayOfWeek = 5;

			let currentDay = today;

			for (let i = 0; i < 3; i++) {
				let newDay = nextDay(currentDay, dayOfWeek);
				console.log("current" + currentDay);
				console.log("new" + newDay);
				setDeliveryDates((dates) => [...dates, format(newDay, "dd/MM/yyyy")]);
				currentDay = newDay;
			}

			console.log(deliveryDates);
			return;
		}

		if (type === "MONTH") {
			let dayOfMonth;

			if (rate === 0) dayOfMonth = 1;
			if (rate === 1) dayOfMonth = 10;
			if (rate === 2) dayOfMonth = 20;

			let currentDelivery = add(startOfMonth(today), { days: dayOfMonth - 1 });

			if (!isFuture(currentDelivery)) {
				currentDelivery = addMonths(currentDelivery, 1);
			}

			for (let i = 0; i < 3; i++) {
				setDeliveryDates((dates) => [...dates, format(currentDelivery, "dd/MM/yyyy")]);
				let nextDelivery = addMonths(currentDelivery, 1);
				currentDelivery = nextDelivery;
			}
			return;
		}
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
								{deliveryDates.map((date) => (
									<li>{date}</li>
								))}
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
	justify-content: space-around;
	padding: 10px 20px;

	p {
		font-size: 20px;
		color: var(--color-1);
		font-weight: 400;
	}
`;

export default MyPlan;
