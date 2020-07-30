import React, {useState} from 'react';
import { css } from '@emotion/core';
import Footer from '../components/Footer';
import Head from '../components/Head';
import LogoContainer from '../components/Logo';
import Navbar from '../components/Navbar';
import {CONSTANTS} from "../shared/Constants";
import fetch from 'node-fetch';
import Cookies from 'js-cookie';
import {useUser} from '../lib/hooks/useUser';


const createPatient = ({form}) => {
	const user = useUser({redirectTo: '/'})

	const cookie = Cookies.get("fimedtk");
	
	const [patients, setPatient] = useState({});

	const handleChange = e => {
		setPatient({...patients, [e.target.name]: e.target.value});
	  }

	const handleSubmit = e => {
        e.preventDefault();
        //validation 


        fetch(`${CONSTANTS.API.url}/api/v2/patient/create`, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			'patient_data': {patients},
			'Authorization': `Bearer ${cookie}`
          },
          body: JSON.stringify(patients)
        }).then((res) => {
			console.log(patients)
            if (!res.ok) {
              throw res;
            }
            alert("Patient created satisfactory")
            return res.json();
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
			console.log(`Error ${err.status}`);
			console.log(patients);
            err.json().then(patients => {patients.detail.map((item,index) => {alert(item.msg)}) });
          });
          
    }
	
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
										<form  id="crate-patient" method="post" encType="multipart/form-data" onSubmit = {handleSubmit} onChange={handleChange}>
											<table className ="table table-condensed table-striped">

													{
														form.rows.map((s,index)=>{
															return(
																
																<div className="form-group" key={index}>
																	<label className="control-label">{s.name}</label>
																	<input type={s.rtype} name={s.name}></input>
																</div>	
															)
														})
													}
												
											</table>
											<div className="form-group">
                    							<div className="col-sm-offset-2 col-sm-10">
                       								 <input type="submit" className="btn-sm btn-primary button-field" css={css`margin-top: 7px;`} value="Create Patient" />
                    							</div>
                							</div>
										</form>
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

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
        method: "GET",
        headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVIiwiZXhwIjoxNTk2MTEzNjM5fQ.wPfwoRrKgaf_sY8DpZyfdVkmoU7Ldzbu0g1fprWIeaU"}
    });
    

    const form = await res.json();
    return {
        props: {
            form
        },
    }
}

export default createPatient;