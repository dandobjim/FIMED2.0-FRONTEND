import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { css } from '@emotion/core';


const Home = () => {
	return (
		<>
			<head>
				<Header />
			</head>
			<body>
				<Navbar />
				<main>
					<div class="container">
						<div class="panel panel-default">
							<div class="panel-body">
								<div class="page-header" css={css`margin-top: 0px;`}>
									<h1>Add or search a patient (s):</h1>
								</div>
								<form>
									<div class="row">
										<div class="col-md-6">
											<h3>Add patient's data columns </h3>
											<button type="submit" class="btn btn-primary btn-lg btn-block">Form design</button>
										</div>
										<div class="col-md-6">
											<h3>Search patients</h3>
											<button type="submit" class="btn btn-primary btn-lg btn-block">Search patient (s)</button>
										</div>
									</div>
									<div class="row">
										<div class="col-md-6">
											<h3>Add new patient</h3>
											<button type="submit" class="btn btn-primary btn-lg btn-block">Add patient (s)</button>
										</div>
										<div class="col-md-6">
											<h3>Analyze your patients' genetic expression data</h3>
											<button type="submit" class="btn btn-primary btn-lg btn-block">Gene level expression analysis</button>
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