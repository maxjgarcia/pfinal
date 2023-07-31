import Title from "../../components/Title/Title";

const ContactFormContainer = () => {
	return (
		<>
			<Title txt="Contacto" color=" text-indigo-700" />
			<div className="mt-5 md:col-span-2 md:mt-0">
				<form action="#" method="">
					<div className="overflow-hidden sm:rounded-md">
						<div className="bg-indigo-100 p-5 ">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-700"
									>
										Nombre
									</label>
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-700"
									>
										Apellido
									</label>
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-4">
									<label
										htmlFor="email-address"
										className="block text-sm font-medium text-gray-700"
									>
										Email
									</label>
									<input
										type="text"
										name="email-address"
										id="email-address"
										autoComplete="email"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>

								<div className="col-span-6 sm:col-span-4">
									<label
										htmlFor="email-address"
										className="block text-sm font-medium text-gray-700"
									>
										Mensaje
									</label>
									<textarea
										type="text"
										name="email-address"
										id="email-address"
										autoComplete="email"
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactFormContainer;
