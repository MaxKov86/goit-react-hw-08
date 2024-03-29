import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
	const contacts = useSelector(selectContacts);

	return (
		<ul className={css.contactList}>
			{contacts.map(contact => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
				/>
			))}
		</ul>
	);
};
export default ContactList;
