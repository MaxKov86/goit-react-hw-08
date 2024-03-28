import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
	return (
		<ul className={css.authNav}>
			<li>
				<NavLink to="/register">Register</NavLink>
			</li>
			<li>
				<NavLink to="/login">Login</NavLink>
			</li>
		</ul>
	);
};
export default AuthNav;
