import styled from "styled-components";
import searchCep from "../../../services/cep-api";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

function DeliveryInfo({ deliveryInfo, setDeliveryInfo, setPage, test2 }) {
	const [isLoading, setIsLoading] = useState(false);
	const [cep, setCep] = useState("");

	function next(e) {
		e.preventDefault();
		setPage(3);
		test2();
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
				alert("Erro ao encontrar o CEP!");
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
				<Address>
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
						<option value="" disabled selected>
							Estado
						</option>
						<option value="SE">SE</option>
						<option value="PB">PB</option>
						<option value="BA">BA</option>
					</select>
				</Address>
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

const Address = styled.div`
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
