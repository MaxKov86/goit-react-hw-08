// import ContactList from './ContactList/ContactList';
// import SearchBox from './SearchBox/SearchBox';
// import ContactForm from './ContactForm/ContactForm';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/contactsOps';
// import Loading from './Loading/Loading';
// import Error from './Error/Error';
// import { selectError, selectIsLoading } from '../redux/contacts/selectors';
// import AppBar from './AppBar/AppBar';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
// import RegisterPage from '../pages/RegisterPage/RegisterPage';
// import HomePage from '../pages/HomePage/HomePage';
// import ContactsPage from '../pages/ContactsPage/ContactsPage';
// import LoginPage from '../pages/LoginPage/LoginPage';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
	// const isLoading = useSelector(selectIsLoading);
	// const error = useSelector(selectError);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchContacts());
	// }, [dispatch]);
	return (
		<Layout>
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/contacts" element={<ContactsPage />} />
				</Routes>
			</Suspense>

			{/* <AppBar />
			<h1>Phonebook</h1>

			<ContactForm />
			<SearchBox />
			{isLoading && <Loading />}
			{error && <Error />}
			<ContactList /> */}
		</Layout>
	);
};

export default App;
