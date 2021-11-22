import { PageTitle } from "../../styles/shared";

const Greeting = () => {
	const userName = localStorage.getItem("name");
	return <PageTitle>Bom te ver por aqui, {userName}</PageTitle>;
};

export default Greeting;
