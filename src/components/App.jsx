import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import Loading from './Loading/Loading';
import Error from './Error/Error';
import { selectError, selectIsLoading } from '../redux/contactsSlice';

const App = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	return (
		<>
			<h1>Phonebook</h1>

			<ContactForm />
			<SearchBox />
			{isLoading && <Loading />}
			{error && <Error />}
			<ContactList />
		</>
	);
};

export default App;
