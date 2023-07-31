import Title from "../../components/Title/Title";

const WhereContainer = () => {
	return (
		<>
			<Title txt="Donde Estamos" color=" text-indigo-700" />
			<div className="flex flex-col justify-center">
				<h2>Av. Cabildo y Av. Juramento</h2>
				<div className="mt-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.666579074077!2d-58.458809384237895!3d-34.561996462799854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3849c3221%3A0xc8999711cc581a5b!2sAv.%20Cabildo%20%26%20Av.%20Juramento%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1662667268471!5m2!1ses!2sar"
						title="Av. Cabildo y Av. Juramento"
						width="100%"
						height="450"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</div>
			</div>
		</>
	);
};

export default WhereContainer;
