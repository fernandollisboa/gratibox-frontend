import { useState } from "react";
import { PageWrapper, PageDescription, SubscriptionWrapper } from "../../styles/shared";
import Greeting from "../../components/Greeting";
import image from "../../assets/image03.jpg";
import PlanInfo from "./PlanInfo";
import DeliveryInfo from "./DeliveryInfo";
import { postSubscription } from "../../services/plan";
import { useNavigate } from "react-router";

const Subscribe = () => {
	const userID = localStorage.getItem("userID");
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
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
				navigate("/my-plan");
			})
			.catch((err) => {
				console.log(err);
				alert("Houve um erro");
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

	return (
		<PageWrapper>
			<Greeting />
			<PageDescription>“Agradecer é arte de atrair coisas boas”</PageDescription>
			<SubscriptionWrapper>
				<img src={image} alt="woman medidating in a room" />

				{page === 1 ? (
					<PlanInfo
						myPlanData={myPlanData}
						setMyPlanData={setMyPlanData}
						updateProducts={updateProducts}
						setPage={setPage}
					/>
				) : (
					""
				)}
				{page === 2 ? (
					<DeliveryInfo
						deliveryInfo={deliveryInfo}
						setDeliveryInfo={setDeliveryInfo}
						sendSubscription={sendSubscription}
					/>
				) : (
					""
				)}
			</SubscriptionWrapper>
		</PageWrapper>
	);
};
export default Subscribe;
