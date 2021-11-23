import styled from "styled-components";
import searchCep from "../../../services/cep-api";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router";

function DeliveryInfo({ deliveryInfo, setDeliveryInfo, sendSubscription }) {
	const [isLoading, setIsLoading] = useState(false);
	const [cep, setCep] = useState("");
	const navigate = useNavigate();

	function next(e) {
		e.preventDefault();
		sendSubscription();
		navigate("/plans");
	}

	function findCep(e) {
		e.preventDefault();
		setIsLoading(true);
		searchCep(cep)
			.then((res) => {
				setDeliveryInfo({
					...deliveryInfo,
					state: res.state,
					city: res.city,
					address: res.street,
				});
				setIsLoading(false);
			})
			.catch((err) => {
				alert("Erro ao encontrar o CEP! ( " + err + " )");
				setIsLoading(false);
			});
	}
	return (
		<form style={{ display: "flex", flexDirection: "column" }} onSubmit={next}>
			<SignPlan>
				<input
					type="text"
					placeholder="Nome completo"
					value={deliveryInfo.name}
					disabled={isLoading}
					required
					onChange={(event) => {
						setDeliveryInfo({
							...deliveryInfo,
							name: event.target.value,
						});
					}}
				/>
				<div style={{ display: "flex", padding: "0px" }}>
					<input
						style={{ background: "rgba(224, 209, 237, 0.22)", width: "88%" }}
						type="text"
						placeholder="CEP (ex.:12345678)"
						required
						disabled={isLoading}
						pattern="[0-9]{8}"
						value={deliveryInfo.cep}
						onChange={(e) => {
							setDeliveryInfo({
								...deliveryInfo,
								cep: e.target.value,
							});
							setCep(e.target.value);
						}}
					/>
					<SearchButton children={<IoIosSearch />} onClick={findCep} />
				</div>
				<input
					type="text"
					placeholder="Endereço de entrega"
					value={deliveryInfo.address}
					required
					disabled={isLoading}
					onChange={(event) => {
						setDeliveryInfo({
							...deliveryInfo,
							address: event.target.value,
						});
					}}
				/>
				<AddressWrapper>
					<input
						type="text"
						placeholder="Cidade"
						required
						disabled={isLoading}
						value={deliveryInfo.city}
						onChange={(event) => {
							setDeliveryInfo({
								...deliveryInfo,
								city: event.target.value,
							});
						}}
					/>
					<select
						name="estado"
						id="estado"
						required
						disabled={isLoading}
						value={deliveryInfo.state}
						onChange={(event) => {
							setDeliveryInfo({
								...deliveryInfo,
								state: event.target.value,
							});
						}}
					>
						<option value="default" disabled>
							Estado
						</option>
						<option value="AC">AC</option>
						<option value="AL">AM</option>
						<option value="AP">AP</option>
						<option value="AM">AM</option>
						<option value="BA">BA</option>
						<option value="CE">CE</option>
						<option value="DF">DF</option>
						<option value="ES">ES</option>
						<option value="GO">GO</option>
						<option value="MA">MA</option>
						<option value="MT">MT</option>
						<option value="MS">MS</option>
						<option value="MG">MG</option>
						<option value="PA">PA</option>
						<option value="PB">PB</option>
						<option value="PR">PR</option>
						<option value="PE">PE</option>
						<option value="PI">PI</option>
						<option value="RJ">RJ</option>
						<option value="RN">RN</option>
						<option value="RS">RS</option>
						<option value="RO">RO</option>
						<option value="RR">RR</option>
						<option value="SC">SC</option>
						<option value="SP">SP</option>
						<option value="SE">SE</option>
						<option value="TO">TO</option>
					</select>
				</AddressWrapper>
			</SignPlan>
			<Button type="submit" disabled={isLoading}>
				Finalizar
			</Button>
		</form>
	);
}

export default DeliveryInfo;

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
		outline: none;
		width: 290px;
		font-weight: 700;
		font-size: 18px;
		background: rgba(224, 209, 237, 0.62);
		border-radius: 5px;
		margin-top: 5px;

		:disabled {
			background: rgba(224, 209, 237, 1);
		}
	}
	input::placeholder {
		color: #4d65a8;
	}
`;

const AddressWrapper = styled.div`
	padding: 0 !important;
	background: initial !important;
	margin-top: 0 !important;
	input {
		width: calc(60% - 5px);
	}
	select {
		width: 40%;
		margin-left: 5px;
	}
`;

const SearchButton = styled.button`
	align-self: center;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	font-size: 25px;
	border-radius: 20px;
	background-color: #8c97ea;
	color: #fff;
`;
