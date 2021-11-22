import axios from "axios";
import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "prod" ? ".env" : ".env.test";

dotenv.config({
	path: envFile,
});

const API = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

console.log(process.env.REACT_APP_BASE_URL);

export default API;
