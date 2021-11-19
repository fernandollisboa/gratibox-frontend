import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoader = (props) => {
	return (
		<StyledLoaderWrapper>
			{/* {props.message ? props.message : "Loading..."} */}
			<Loader type={props.type ? props.type : "ThreeDots"} color="white" height={70} width={70} />
		</StyledLoaderWrapper>
	);
};

export const StyledLoaderWrapper = styled.div`
	height: 10px;
	flex: 1;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1230px) {
		width: 100%;
	}
`;

export default StyledLoader;
