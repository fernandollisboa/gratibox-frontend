import API from "./api";

function createHeaders(token) {
	const config = { headers: { authorization: `Bearer ${token}` } };
	return config;
}

async function postSignup({ name, email, password, passwordConfirmation }) {
	const body = { name, email, password, passwordConfirmation };
	return API.post("/signup", body);
}
