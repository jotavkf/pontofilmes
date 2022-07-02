import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function FormCheckout({ cart, setCart }) {
	const navigate = useNavigate();

	return (
		<div className=' max-w-md justify-between w-full space-y-8'>
			<Formik
				validateOnChange={true}
				validateOnBlur={true}
				initialValues={{
					nomeCompleto: '',
					cpf: '',
					telefone: '',
					email: '',
					cep: '',
					endereco: '',
					cidade: '',
					estado: '',
				}}
				onSubmit={async function (values) {
					try {
						console.log(values, cart); //Onde deveria ser o grandioso POST;
						toast.custom((t) => (
							<div
								className={`${
									t.visible ? 'animate-enter' : 'animate-leave'
								} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
								<div className='flex-1 w-0 p-4'>
									<div className='flex items-start'>
										<div className='flex-shrink-0 pt-0.5'></div>
										<div className='ml-3 flex-1'>
											<p className='text-sm font-medium text-gray-900'>
												Obrigado {values.nomeCompleto}
											</p>
											<p className='mt-1 text-sm text-gray-500'>
												Sua compra foi finalizada com sucesso!
											</p>
										</div>
									</div>
								</div>
								<div className='flex border-l border-gray-200'>
									<button
										onClick={() => {
											setCart([]);
											toast.dismiss(t.id);
											navigate('/');
										}}
										className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
										Fechar
									</button>
								</div>
							</div>
						));
					} catch (error) {
						console.log(error);
						alert(`${error}`);
					}
				}}>
				<Form className='mt-4'>
					<div className='rounded-md shadow-sm space-y-3 my-6'>
						<Field
							id='nomeCompleto'
							name='nomeCompleto'
							placeholder='Nome completo'
							type='text'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='cpf'
							name='cpf'
							placeholder='CPF'
							type='text'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='telefone'
							name='telefone'
							placeholder='Telefone para contato'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='email'
							name='email'
							placeholder='E-mail'
							type='email'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='cep'
							name='cep'
							placeholder='CEP'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='endereco'
							name='endereco'
							placeholder='Endereço'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='cidade'
							name='cidade'
							placeholder='Cidade'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
						<Field
							id='estado'
							name='estado'
							placeholder='Estado'
							required={true}
							className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white'
						/>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'>
							Comprar
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default FormCheckout;
