import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();

	return (
		<>
			<li
				id={id}
				className={css.item}
				onClick={() => {
					dispatch(deleteContact(id));
				}}
			>
				<div className={css.itemInfoContainer}>
					<p className={css.text}>
						<IoPerson className={css.iconPerson} />
						{name}
					</p>
					<p className={css.text}>
						<FaPhone className={css.iconPhone} />
						{number}
					</p>
				</div>
				<button className={css.button} type="button">
					Delete
				</button>
			</li>
		</>
	);
};
export default Contact;
