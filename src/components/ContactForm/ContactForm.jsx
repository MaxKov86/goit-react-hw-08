import css from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(50, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
	number: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(12, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
});

const initialValues = { name: '', number: '' };

const ContactForm = () => {
	const dispatch = useDispatch();

	const nameId = nanoid(9);
	const numberId = nanoid(9);

	const handleSubmit = (values, actions) => {
		dispatch(
			addContact({
				name: values.name,
				number: values.number,
			})
		);
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={css.form}>
				<label htmlFor={nameId}>Name</label>
				<Field
					className={css.fieldName}
					type="text"
					name="name"
					id={nameId}
					placeholder="Antony Robins"
				/>

				<ErrorMessage className={css.error} name="name" as="span" />

				<label className={css.labelNumber} htmlFor={numberId}>
					Number
				</label>
				<Field
					className={css.fieldNumber}
					type="text"
					name="number"
					id={numberId}
					placeholder="111-111-1111"
				/>

				<ErrorMessage className={css.error} name="number" as="span" />

				<button className={css.addBtn} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
