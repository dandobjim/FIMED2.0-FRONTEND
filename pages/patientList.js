import React, { useState } from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { css } from "@emotion/core";
import Navbar from "../components/Navbar";
import fetch from "node-fetch";
import { CONSTANTS } from "../shared/Constants";
import LogoContainer from "../components/Logo";
import Link from "next/link";
import { useUser } from "../lib/hooks/useUser";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import Router from "next/router";


function patientList({ patients }) {
  const user = useUser({ redirectTo: "/" });
  const cookie = Cookies.get("fimedtk");

  useState(patients);

  const fetchDelete = (id) => {

  }

  function handleDeleteClick (id) {

    return (fetch(`${CONSTANTS.API.url}/api/v2/patient/delete` + "/" + id , {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      //body: JSON.stringify( id ),
    }).then((res) => {
      //console.log(res);
      alert("Patient deleted satisfactory");
      window.location.reload(false)
      //Router.push("/home");
    }).catch((err) => {
      console.log(err)
      console.log(`Error ${err.status}`);
      
      err.json().then(() => {
        id.detail.map((item, index) => {
          alert(item.msg);
        });
      });
    }))
  };

  const [patient, usePatient] = useState(patients);
  //console.log(patient)
  return (
    <>
      <head>
        <Head />
      </head>
      <body>
        <div>
          <Navbar />
        </div>
        <main>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-body">
                <div
                  className="page-header"
                  css={css`
                    margin-top: 0px;
                  `}
                >
                  <LogoContainer />
                  <h2>Patient List</h2>
                </div>

                {patient.map((s, index) => {
                  return (
                    <form>
                      <div key={index}>
                        <table className="table table-condensed table-striped">
                          <thead>
                            <tr>
                              <th
                                align="center"
                                css={css`
                                  text-align: "center";
                                  font-size: 14px;
                                `}
                                colSpan="2"
                              >
                                ID : {s.id}
                              </th>
                              <Link href={`updatePatient/${s.id}`}>
                                <a
                                  className="glyphicon glyphicon-pencil"
                                  css={css`
                                    margin-top: 1rem;
                                    color: black;
                                    border: none;
                                    position: relative;
                                    left: 1rem;
                                  `}
                                ></a>
                              </Link>

                              <a
                                className="glyphicon glyphicon-remove"
                                
                                css={css`
                                  margin-top: 1rem;
                                  color: black;
                                  border: none;
                                  position: relative;
                                  left: 1rem;
                                  margin-left: 1rem;
                                `}
                                onClick={ () => handleDeleteClick(s.id)}
                              ></a>
                            </tr>
                          </thead>
                          <table
                            className="table table-condensed table-bordered"
                            css={css`
                              width: 90%;
                              margin-top: 25px;
                              margin-bottom: 10px;
                            `}
                            allign="center"
                          >
                            <tbody>
                              {Object.keys(s.clinical_information).map(
                                (item, i) => (
                                  <tr>
                                    <td
                                      className="col-md-2"
                                      css={css`
                                        text-align: center;
                                        background-color: rgba(
                                          235,
                                          105,
                                          9,
                                          0.65
                                        );
                                        font-weight: bold;
                                      `}
                                    >
                                      {item}:
                                    </td>
                                    <td
                                      className="col-md-6"
                                      css={css`
                                        text-align: left;
                                        background-color: #fff;
                                      `}
                                    >
                                     {s.clinical_information[item].value} 
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </table>
                      </div>
                    </form>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //get cookie
  const allCookies = cookies(ctx);
  const res = await fetch(`${CONSTANTS.API.url}/api/v2/patient/all`, {
    method: "GET",
    headers: { Authorization: `Bearer ${allCookies.fimedtk}` },
  });

  var patients = await res.json();
  {
    patients == [] ? (patients = []) : null;
  }
  //console.log(patients)
  return {
    props: {
      patients,
    },
  };
}

export default patientList;
