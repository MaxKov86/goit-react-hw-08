import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<h1>Your Phone Book</h1>
			<p>
				Hello! If you need a place to save your contacts and you don`t want to
				lose them, then you`ve come to the right place!🙂 To get started, click
				<Link to="/register"> here</Link> to register your account!
			</p>
		</>
	);
};

export default HomePage;
