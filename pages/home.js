import React from 'react';
import Navbar from '../components/Navbar';
import Head from '../components/Head';
import Footer from '../components/Footer';
import { css } from '@emotion/core';
import Link from 'next/link';


const Home = () => {
	return (
		<>
			<head>
				<Head />
			</head>
			<body>
				<Navbar />
				<main>
					<div className="container">
						<div className="panel panel-default">
							<div className="panel-body">
								<div className="page-header" css={css`margin-top: 0px;`}>
									<h1>Add or search a patient (s):</h1>
								</div>
								<form>
									<div className="row">
										<div className="col-md-6">
											<h3>Add patient's data columns </h3>
											<Link href = "/formDesign">
												<button type="submit" className="btn btn-primary btn-lg btn-block">Form design</button>
											</Link>
										</div>
										<div className="col-md-6">
											<h3>Search patients</h3>
											<Link href="/patientList">
												<button type="submit" className="btn btn-primary btn-lg btn-block">Search patient (s)</button>
											</Link>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<h3>Add new patient</h3>
											<Link href ="/createPatient">
												<button type="submit" className="btn btn-primary btn-lg btn-block">Add patient (s)</button>
											</Link>
										</div>
										<div className="col-md-6">
											<h3>Analyze your patients' genetic expression data</h3>
											<button type="submit" className="btn btn-primary btn-lg btn-block">Gene level expression analysis</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</body>
		</>
	);
}

export default Home;