import axios from "axios";

const API = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

export function createHeaders(token) {
	const config = { headers: { authorization: `Bearer ${token}` } };
	return config;
}

console.log(process.env.REACT_APP_BASE_URL);

export default API;
