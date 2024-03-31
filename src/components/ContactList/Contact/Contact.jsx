import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactsOps';
import toast from 'react-hot-toast';

const Contact = ({ id, name, number }) => {
	const dispatch = useDispatch();
	const handleDelete = e => {
		if (e.target.nodeName !== 'BUTTON') {
			return;
		}
		dispatch(deleteContact(id))
			.unwrap()
			.then(() => toast.success(`You delete ${name} from your contacts!`));
	};

	return (
		<>
			<li id={id} className={css.item} onClick={handleDelete}>
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
				{/* <button className={css.button} type="button">
					Edit
				</button> */}
				<button className={css.button} type="button">
					Delete
				</button>
			</li>
		</>
	);
};
export default Contact;
