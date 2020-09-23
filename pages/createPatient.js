import React, { useState } from "react";
import { css } from "@emotion/core";
import Footer from "../components/Footer";
import Head from "../components/Head";
import LogoContainer from "../components/Logo";
import Navbar from "../components/Navbar";
import { CONSTANTS } from "../shared/Constants";
import fetch from "node-fetch";
import Cookies from "js-cookie";
import { useUser } from "../lib/hooks/useUser";
import cookies from "next-cookies";
import Router from "next/router";
import Link from "next/link";

const createPatient = ({ form }) => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");

  const [patients, setPatient] = useState({});

  const handleChange = (e) => {
    setPatient({ ...patients, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation

    fetch(`${CONSTANTS.API.url}/api/v2/patient/create`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        patient_data: { patients },
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify(patients),
    })
      .then((res) => {
        console.log(patients);
        if (!res.ok) {
          throw res;
        }
        alert("Patient created satisfactory");
        return res.json();
      })
      .then((res) => {
        console.log(res);
        Router.push("/home");
      })
      .catch((err) => {
        console.log(`Error ${err.status}`);
        console.log(patients);
        err.json().then((patients) => {
          patients.detail.map((item, index) => {
            alert(item.msg);
          });
        });
      });
  };
  if (form) {
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
                  <div
                    className="page-header"
                    css={css`
                      margin-top: 0px;
                    `}
                  >
                    <LogoContainer />
                    <h2>Create Patient</h2>
                    <hr />
                    <div>
                      <form
                        id="crate-patient"
                        method="post"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                      >
                        <table className="table table-condensed table-striped">
                          {form.map((s, index) => {
                            return (
                              <div className="row" key={index}>
                                <div className="col-md-6 col-md">
                                  <label className="control-label">
                                    {s.name}
                                  </label>
                                  <input
                                    className="form-control"
                                    type={s.rtype}
                                    name={s.name}
                                  ></input>
                                </div>
                              </div>
                            );
                          })}
                        </table>

                        <div className="form-group">
                          <div className="col-sm-offset-2 col-sm-10">
                            <input
                              type="submit"
                              className="btn-sm btn-primary button-field"
                              css={css`
                                margin-top: 7px;
                              `}
                              value="Create Patient"
                            />
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
  } else {
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
                  <div
                    className="page-header"
                    css={css`
                      margin-top: 0px;
                    `}
                  >
                    <LogoContainer />
                    <h2>Create Patient</h2>
                    <hr />
                    <div>
                      <p>
                        Aun no se ha creado nigun formulario, por favor cree su
                        primer diseño
                      </p>
                      <Link href="/formDesign">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Form design
                        </button>
                      </Link>
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
};

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allCookies = cookies(ctx);
  const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
    method: "GET",
    headers: { Authorization: `Bearer ${allCookies.fimedtk}` },
  });

  const form = await res.json();
  return {
    props: {
      form,
    },
  };
}

export default createPatient;
