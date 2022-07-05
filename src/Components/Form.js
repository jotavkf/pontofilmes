import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { CheckoutSchema } from './FormSchema';
import InputMask from 'react-input-mask';
import toast from 'react-hot-toast';

function FormCheckout({ cart, setCart }) {
	const navigate = useNavigate();

	const CustomInput = ({ field, mask, ...props }) => (
		<InputMask mask={mask} {...field} {...props} />
	);

	const formStyle =
		'relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-indigo-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:z-10 focus:border-indigo-500 bg-white';

	return (
		<div className='max-w-3xl justify-between w-full space-y-8'>
			<Formik
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
				validationSchema={CheckoutSchema}
				onSubmit={async function (values) {
					try {
						let objCheckout = { dados: values, carrinho: cart };
						console.log(JSON.stringify(objCheckout, null, 2)); //Onde deveria ser o grandioso POST;
						toast.custom(
							(t) => (
								<div
									className={`${
										t.visible ? 'animate-enter' : 'animate-leave'
									} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
									<div className='flex-1 w-0 p-4'>
										<div className='flex items-start'>
											<div className='flex-shrink-0 pt-0.5'>
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
							),
							{ duration: Infinity }
						);
					} catch (error) {
						console.log(error);
						alert(`${error}`);
					}
				}}>
				<Form className='mt-4'>
					<div className='rounded-md shadow-sm space-y-3 my-6'>
						<Field
							name='nomeCompleto'
							placeholder='Nome completo'
							required={true}
							className={formStyle}
						/>
						<ErrorMessage
							name='nomeCompleto'
							component='span'
							className='text-red-500 text-xs italic'
						/>
						<Field
							name='cpf'
							required={true}
							mask={'999.999.999-99'}
							placeholder='Digite seu CPF'
							className={formStyle}
							component={CustomInput}
						/>

						<ErrorMessage
							name='cpf'
							component='span'
							className='text-red-500 text-xs italic'
						/>
						<Field
							name='telefone'
							placeholder='Telefone para contato'
							mask={'(99)99999-9999'}
							required={true}
							className={formStyle}
							component={CustomInput}
						/>
						<ErrorMessage
							name='telefone'
							component='span'
							className='text-red-500 text-xs italic'
						/>
						<Field
							name='email'
							placeholder='E-mail'
							required={true}
							className={formStyle}
						/>
						<ErrorMessage
							name='email'
							component='span'
							className='text-red-500 text-xs italic'
						/>
						<Field
							name='cep'
							placeholder='CEP'
							mask={'99999-999'}
							required={true}
							className={formStyle}
							component={CustomInput}
						/>
						<ErrorMessage
							name='cep'
							component='span'
							className='text-red-500 text-xs italic'
						/>
						<Field
							name='endereco'
							placeholder='Endereço'
							required={true}
							className={formStyle}
						/>
						<Field
							name='cidade'
							placeholder='Cidade'
							required={true}
							className={formStyle}
						/>
						<Field
							name='estado'
							placeholder='Estado'
							required={true}
							className={formStyle}
						/>
					</div>
					<div>
						<button
							type='submit'
							className='group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300'>
							Comprar
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default FormCheckout;
