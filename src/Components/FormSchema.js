import * as Yup from 'yup';

export const CheckoutSchema = Yup.object().shape({
	nomeCompleto: Yup.string().min(10, 'Informe o nome completo'),
	cpf: Yup.string().matches(
		/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
		'Informe o CPF, com pontos e traços'
	),
	telefone: Yup.string().matches(
		/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
		'Informe o telefone, com DDD'
	),
	email: Yup.string().email('E-mail inválido'),
	cep: Yup.string().matches(
		/^[0-9]{5}-[0-9]{3}$/,
		'Informe o CEP sem pontos e com traço'
	),
});
