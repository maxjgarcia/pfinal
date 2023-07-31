import "./Title.css";

const Title = ({ txt, color }) => {
	return <h1 className={color}>{txt}</h1>;
};

export default Title;
