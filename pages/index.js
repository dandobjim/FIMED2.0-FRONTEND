import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';

const MOCKED_API = process.env.MOCKED_API || 'http://jsonplaceholder.typicode.com';

export async function getServerSideProps(ctx) {
	// next.js will pre-render this page on each request
	const data = await fetch(`${MOCKED_API}/users/`);
	const items = await data.json();

	return {
		props: { items },
	}
}

const Index = (props) => {
	const { items } = props;
	return (
		<>
			<head>
				<Head />
			</head>
			<body>
				<main>
					<div className="container">
						<div className="panel panel-default">
							<div className="panel-body">
								<ul>
									{items.map(i => <li>{i.name}</li>)}
								</ul>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</body>
		</>
	);
}

export default Index;