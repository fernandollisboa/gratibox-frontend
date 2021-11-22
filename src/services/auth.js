import API from "./api";

export async function postSignup({ name, email, password, confirmPassword }) {
	const body = { name, email, password, confirmPassword };
	return API.post("/sign-up", body);
}

export async function postLogin({ email, password }) {
	const body = { email, password };
	return API.post("/login", body);
}
