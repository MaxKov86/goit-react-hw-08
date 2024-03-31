import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	return (
		<div className={css.userMenu}>
			<p className={css.text}>Welcome, {user.name}!)</p>
			<button
				onClick={() => {
					dispatch(logOut());
				}}
			>
				Logout
			</button>
		</div>
	);
};
export default UserMenu;
