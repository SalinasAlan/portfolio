import Head from 'next/head'
import Header from '../Components/Header';
import Home from './home';

const App = ({ avatar, github }) => {
	return (
		<>
			<Head>
				<title>Alan Salinas 🎶💻🍕🚀</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
			</Head>
			<Header />
			<Home avatar={avatar} github={github} />
		</>	
	);
}

App.getInitialProps = async () => {
	const res = await fetch('https://api.github.com/users/SalinasAlan')
	const user = await res.json()

	return {
		avatar: user.avatar_url,
		github: user.html_url
	};
}

export default App;
