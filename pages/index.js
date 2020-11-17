import Head from 'next/head'
import Header from '../Components/Header';
import Home from './home';

const App = ({ avatar }) => {
	return (
		<>
			<Head>
				<title>Alan Salinas 🎶💻🍕🚀</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="Description" content="Portafolio de Alan Salinas, desarrollador frontend"></meta>
			</Head>
			<Header />
			<Home avatar={avatar}/>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/users/SalinasAlan')
	const user = await res.json()

	return {
		props: {
			avatar: user.avatar_url
		}
	};
}

export default App;
