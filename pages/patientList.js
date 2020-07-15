import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { css } from '@emotion/core';
import Navbar from '../components/Navbar';
import fetch from 'node-fetch';
import {CONSTANTS} from "../shared/Constants";
import LogoContainer from "../components/Logo";

function patientList({patients}){
    return(
        <>
            <head>
                <Header/>
            </head>
            <body>
                <div>
                    <Navbar/>
                </div>
                <main>
                <div className="container">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="page-header" css={css` margin-top:0px; `}>
								<LogoContainer/>
								<h2>Patient List</h2>
							</div>
                                {patients.map((s, index) => {
                                    
                                    return (
                                        <table className ="table table-condensed table-striped">
                                            <thead>
                                                <tr>
                                                    <th align="center" css={css`text-align:"center"; font-size:14px; `} colSpan="2">ID : {s.id}</th>
                                                </tr>
                                            </thead>
                                            <table className ="table table-condensed table-bordered clearfix" css = {css ` width:90%; margin-top: 25px; margin-bottom:10px;`} allign = "center">
                                                {Object.keys(s.clinical_information).map((item,i) => (
                                                    <>
                                                        <tbody>
                                                            <td>
                                                                <th className="table-striped" css={css`background-color: rgba(235, 105, 9, 0.65);`}>
                                                                    <td className="col-lg-6" css = {css ` text-align:center;`}>{item}</td>
                                                                    <td className="col-lg-6"  css = {css`text-align:center; background-color:#fff;`}>{s.clinical_information[item]}</td>
                                                                </th>
                                                            </td>
                                                        </tbody>
                                                    </>
                                                ))}
                                            </table>
                                        </table>
                                    )})
                                }
                        </div>
                    </div>
                </div>
                        
                </main>
                <Footer/>
            </body>

        </>
    )

    
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`${CONSTANTS.API.url}/api/v2/patient/all`, {
        method: "GET",
        headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYW51ZWwiLCJleHAiOjE1OTQ2NDUwNTN9.Fy8ApdKnYSALFcLN5N_byQYBRDyAFUGEg1Qznpxo99Y"}
    });
    

    const patients = await res.json();
    //console.log(patients)
    return {
        props: {
            patients,
        },
    }
}

export default patientList;