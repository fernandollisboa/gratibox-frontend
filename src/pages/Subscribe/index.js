/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PageWrapper, PageDescription } from "../../styles/shared";
import Greeting from "../../components/Greeting";
import image from "../../assets/image03.jpg";
import PlanInfo from "./PlanInfo";
import DeliveryInfo from "./DeliveryInfo";
import { useNavigate } from "react-router";
import { postSubscription } from "../../services/plan";

const Subscribe = () => {
	const userID = localStorage.getItem("userID");
	const token = localStorage.getItem("token");
	const [page, setPage] = useState(1);
	const [myPlanData, setMyPlanData] = useState({
		type: "",
		deliveryRateId: "",
		products: [],
	});
	const [deliveryInfo, setDeliveryInfo] = useState({
		name: "",
		address: "",
		cep: "",
		city: "",
		state: "",
	});

	function sendSubscription() {
		postSubscription({ userID, myPlanData, deliveryInfo, token })
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
				alert("Houve algum erro xd xd xd ");
			});
	}

	function updateProducts(e) {
		if (e.target.checked) {
			setMyPlanData({
				...myPlanData,
				products: [...myPlanData.products, e.target.value],
			});
		} else
			setMyPlanData({
				...myPlanData,
				products: myPlanData.products.filter((p) => p !== e.target.value),
			});
	}

	const navigate = useNavigate();
	function test() {
		console.log(myPlanData);
	}

	return (
		<PageWrapper>
			<Greeting />
			<PageDescription>“Agradecer é arte de atrair coisas boas”</PageDescription>
			<MySignatureDetails>
				<img src={image} alt="woman medidating in a room" />

				{page === 1 ? (
					<PlanInfo
						myPlanData={myPlanData}
						setMyPlanData={setMyPlanData}
						updateProducts={updateProducts}
						setPage={setPage}
						test={test}
					/>
				) : (
					""
				)}
				{page === 2 ? (
					<DeliveryInfo
						deliveryInfo={deliveryInfo}
						setDeliveryInfo={setDeliveryInfo}
						setPage={setPage}
						sendSubscription={sendSubscription}
					/>
				) : (
					""
				)}
			</MySignatureDetails>
		</PageWrapper>
	);
};
export default Subscribe;

const MySignatureDetails = styled.div`
	background: #ffffff;
	border-radius: 10px;
	width: 356px;
	height: 382px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 5px;
	margin-top: 10px;
	img {
		width: 100%;
		height: 40%;
		object-fit: cover;
		border-radius: 10px;
	}
	p {
		font-weight: 700;
		font-size: 18px;
		padding: 0 16px;
		color: #e63c80;
	}
	.label {
		color: #4d65a8;
	}
`;
