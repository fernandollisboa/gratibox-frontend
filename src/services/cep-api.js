import cep from "cep-promise";

export default async function searchCep(cepStr) {
	try {
		const response = await cep(cepStr);
		console.log(response);
		return response;
	} catch (err) {
		console.log(err);
		return false;
	}
}
