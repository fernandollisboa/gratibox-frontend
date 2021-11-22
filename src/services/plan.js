import API, { createHeaders } from "./api";

export async function postSubscription({ userID, myPlanData, deliveryInfo, token }) {
	const { type, deliveryRateId, products } = myPlanData;
	const { name, address, cep, city, state } = deliveryInfo;

	const body = {
		userID,
		plan: { type, deliveryRateId, products },
		delivery: { name, address, cep, city, state },
	};
	const config = createHeaders(token);

	return API.post("/signature", config, body);
}
