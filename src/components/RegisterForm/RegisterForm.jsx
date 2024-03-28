import { Field, Form, Formik } from 'formik';
import css from './RegisterForm.module.css';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';

// const validationSchema = Yup.object().shape({
// 	name: Yup.string()
// 		.min(3, 'Too short!')
// 		.max(20, 'Too long!')
// 		.required('Required!'),
// 	email: Yup.string()
// 		.min(6, 'Too short!')
// 		.max(20, 'Too long!')
// 		.required('Required'),
// 	password: Yup.string()
// 		.min(3, 'Too short!')
// 		.max(20, 'Too long!')
// 		.required('Required!'),
// });

const initialValues = {
	name: '',
	email: '',
	password: '',
};
const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(register(values));
		actions.resetForm();
	};
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={css.form} autoComplete="off">
				<label className={css.label}>
					User
					<Field type="text" name="name" />
				</label>
				<label className={css.label}>
					Email
					<Field type="email" name="email" />
				</label>
				<label className={css.label}>
					Password
					<Field type="password" name="password" />
				</label>

				<button type="submit">Register</button>
			</Form>
		</Formik>
	);
};

export default RegisterForm;
