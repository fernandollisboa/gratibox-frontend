/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useEffect, useState } from "react";
import image from "../../../assets/image03.jpg";
import { useNavigate } from "react-router";

function PlanInfo({ myPlanData, setMyPlanData, updateProducts, setPage, test }) {
	const [type, setType] = useState("text");
	const [plans, setPlans] = useState([
		{ id: "MONTH", name: "Mensal" },
		{ id: "WEEKL", name: "Semanal" },
	]);
	const [products, setProducts] = useState([
		{ id: 0, name: "Chás" },
		{ id: 1, name: "Incensos" },
		{ id: 2, name: "Produtos Orgânicos" },
	]);

	const [monthlyOptions, setMonthlyOptions] = useState([
		{ id: 0, name: "Todo dia 1" },
		{ id: 1, name: "Todo dia 10" },
		{ id: 2, name: "Todo dia 20" },
	]);

	const [weeklyOptions, setWeeklyOptions] = useState([
		{ id: 3, name: "Toda Segunda" },
		{ id: 4, name: "Toda Quarta" },
		{ id: 5, name: "Toda Sexta" },
	]);

	const navigate = useNavigate();

	function next(e) {
		e.preventDefault();
		if (!myPlanData.type || !myPlanData.deliveryRateId || !myPlanData.products.length) {
			alert("Preencha todos os campos para prosseguir");
			test();
			return;
		}
		setPage(2);
		test();
	}

	return (
		<form style={{ display: "flex", flexDirection: "column" }} onSubmit={next}>
			<SignPlan>
				<select
					name="plans"
					id="plans"
					defaultValue="default"
					required={true}
					onChange={(event) => {
						setMyPlanData({
							...myPlanData,
							type: event.target.value,
							deliveryRateId: "",
						});
					}}
				>
					<option value="default" disabled>
						Plano
					</option>
					{plans.length > 0 ? (
						plans.map((plan) => (
							<option key={plan.id} value={plan.id}>
								{plan.name}
							</option>
						))
					) : (
						<option key="-1" value="" disabled>
							Nenhum plano encontrado
						</option>
					)}
				</select>
				<select
					name="delivery"
					id="delivery"
					defaultValue="default"
					required
					onChange={(event) => {
						setMyPlanData({
							...myPlanData,
							deliveryRateId: event.target.value,
						});
					}}
				>
					<option value="default" disabled>
						Entrega
					</option>
					{myPlanData?.type
						? myPlanData.type === "MONTH"
							? monthlyOptions.map((op) => (
									<option key={op.id} value={op.id}>
										{op.name}
									</option>
							  ))
							: weeklyOptions.map((op) => (
									<option key={op.id} value={op.id}>
										{op.name}
									</option>
							  ))
						: ""}
				</select>

				<SignProducts>
					<p>Quero receber</p>
					{products.length > 0
						? products.map((product) => (
								<>
									<input
										id="product"
										key={product.id}
										type="checkbox"
										value={product.id}
										onChange={(event) => {
											setMyPlanData(false);
											updateProducts(event);
										}}
									/>
									<label key={`${product.id} label`}>{product.name}</label>
								</>
						  ))
						: null}
				</SignProducts>
			</SignPlan>
			<Button type="submit">Próximo</Button>
		</form>
	);
}
export default PlanInfo;

const Button = styled.button`
	align-self: center;
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
	margin-top: 30px;
	cursor: pointer;
`;
const SignPlan = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	select,
	div,
	input {
		border: none;
		padding: 12px;
		color: #4d65a8;
		width: 290px;
		outline: none;
		font-weight: 700;
		font-size: 18px;
		background: rgba(224, 209, 237, 0.62);
		border-radius: 5px;
		margin-top: 5px;
	}
	input::placeholder {
		color: #4d65a8;
	}
`;

const SignProducts = styled.div`
	p {
		padding: 0;
		font-weight: 700;
		font-size: 18px;
		margin-bottom: 15px;
	}
	label {
		margin-right: 40px;
	}
	input[type="checkbox"] {
		width: 20px;
		height: 20px;
		border: 0;
	}
	input[type="checkbox"]:after {
	}
`;
