import React from 'react';
import { css } from '@emotion/core';
import Footer from '../components/Footer';
import Head from '../components/Head';
import LogoContainer from '../components/Logo';
import Navbar from '../components/Navbar';
import FormPatient from '../components/FormPatient';

const createPatient = () => {
    return (
        <>
			<head>
				<Head/>
			</head>
			
			<body>
                <Navbar/>
				<main>
					<div className="container">
						<div className="panel panel-default">
							<div className="panel-body">
								<div className="page-header" css={css` margin-top:0px; `}>
									<LogoContainer/>
									<h2>Create Patient</h2>
                                    <hr/>
									<div>
										<FormPatient/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</body>
		</>
    );
}
 
export default createPatient;