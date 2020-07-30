import React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import { css } from '@emotion/core';
import Navbar from '../components/Navbar';
import fetch from 'node-fetch';
import {CONSTANTS} from "../shared/Constants";
import LogoContainer from "../components/Logo";
import Link from "next/link";
import Cookies from 'js-cookie';


function patientList({patients}){

    

    return(
        <>
            <head>
                <Head/>
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
                                                    <Link href= {`updatePatient/${s.id}`}>
                                                        <a className="glyphicon glyphicon-pencil" css={css`margin-top:1rem; color:black;position:relative; left:1rem;`}></a>
                                                    </Link>
                                                    <Link href="/">
                                                        <a className="glyphicon glyphicon-remove" css={css`margin-top:1rem; color:black; position:relative; left:1rem; margin-left:1rem;`}></a>
                                                    </Link>
                                                </tr>
                                            </thead>
                                            <table className ="table table-condensed table-bordered" css = {css ` width:90%; margin-top: 25px; margin-bottom:10px;`} allign = "center">
                                                <tbody>
                                                {Object.keys(s.clinical_information).map((item,i) => (
                                                        
                                                    <tr>

                                                        <td className="col-md-2" css = {css ` text-align:center; background-color:rgba(235, 105, 9, 0.65);`}>{item}</td>
                                                        <td className="col-md-6"  css = {css`text-align:left; background-color:#fff;`}>{s.clinical_information[item]}</td>

                                                    </tr>
                                                        
                                                ))}
                                                </tbody>
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
    //get cookie
    const cookie = Cookies.get("fimedtk");
    const res = await fetch(`${CONSTANTS.API.url}/api/v2/patient/all`, {
        method: "GET",
        headers: {"Authorization": "Bearer " + {cookie}}
    });
    
    console.log(cookie)
    const patients = await res.json();
    console.log(patients)
    return {
        props: {
            patients,
        },
    }
}

export default patientList;