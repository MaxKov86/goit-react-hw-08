import { selectIsLoading } from '../../redux/contacts/selectors';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';

const AppBar = () => {
	const isLoggedIn = useSelector(selectIsLoading);
	return (
		<>
			<header className={css.header}>
				<Navigation />
				{isLoggedIn ? <UserMenu /> : <AuthNav />}
			</header>
		</>
	);
};
export default AppBar;
