import cep from "cep-promise";

export default async function searchCep(cepStr) {
	const response = await cep(cepStr);
	return response;
}
