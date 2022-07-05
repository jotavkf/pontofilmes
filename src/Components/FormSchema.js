import * as Yup from 'yup';

export const CheckoutSchema = Yup.object().shape({
	nomeCompleto: Yup.string().min(10, 'Informe o nome completo'),
	email: Yup.string().email('E-mail inválido'),
});
