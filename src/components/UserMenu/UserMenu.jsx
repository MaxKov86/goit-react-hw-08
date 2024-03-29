import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
	const user = useSelector(selectUser);
	return (
		<div className={css.userMenu}>
			<p>Welcome, {user.name}!)</p>
			<button>Logout</button>
		</div>
	);
};
export default UserMenu;
