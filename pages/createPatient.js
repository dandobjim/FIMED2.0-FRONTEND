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
import axios from "axios";
import Link from "next/link";

const createPatient = ({ form }) => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");

  const [patients, setPatient] = useState({});
  const [file, setFile] = useState({});

  const handleChange = (e) => {
    setPatient({
      ...patients,
      [e.target.name]: { value: e.target.value, type: e.target.type },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation

    fetch(`${CONSTANTS.API.url}/api/v2/patient/create`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify(patients),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        alert("Patient created satisfactory");
        return res.json();
      })
      .then((res) => {
        window.location.reload(false);
        //Router.push("/createPatient");
      })
      .catch((err) => {
        console.log(`Error ${err.status}`);
        //console.log(patients);
        err.json().then((patients) => {
          patients.detail.map((item, index) => {
            alert(item.msg);
          });
        });
      });
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("file", file);
    console.log(formdata);
    axios({
      url: `${CONSTANTS.API.url}/api/v2/patient/create_by_csv`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
      data: formdata,
    }).then((res) => {
      window.location.reload(false);
      alert("File upload suscessfully");
    });
  };

  if (form.length == 0) {
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
                      <div className="">
                        <label>Select File</label>
                        <input
                          type="file"
                          name="file"
                          onChange={(e) => handleFile(e)}
                        />
                        <br />
                        <button
                          type="button"
                          onClick={(e) => handleUpload(e)}
                          className="btn btn-primary"
                        >
                          Upload
                        </button>
                      </div>
                      <br />
                      <div>
                        <div className="alert alert-warning" role="alert">
                          Form don't create yet{" "}
                          <a href="/formDesign" className="alert-link">
                            create a new form
                          </a>{" "}
                          please.
                        </div>
                      </div>
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
                      <div className="">
                        <label>Select File</label>
                        <input
                          type="file"
                          name="file"
                          onChange={(e) => handleFile(e)}
                        />
                        <br />
                        <button
                          type="button"
                          onClick={(e) => handleUpload(e)}
                          className="btn btn-primary"
                        >
                          {" "}
                          Upload{" "}
                        </button>
                      </div>
                      <br />
                      <form
                        id="crate-patient"
                        method="post"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        onChange={handleChange}
                      >
                        <form>
                          {form.map((s, index) => {
                            return (
                              <div className="row" key={index}>
                                <div className="col-md-6 col-md">
                                  <label className="control-label">
                                    {s.name}:
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name={s.name}
                                    required
                                  />
                                </div>
                              </div>
                            );
                          })}
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
};

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allCookies = cookies(ctx);
  const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
    method: "GET",
    headers: { Authorization: `Bearer ${allCookies.fimedtk}` },
  });

  let form = await res.json();
  form == null ? (form = []) : null;

  return {
    props: {
      form,
    },
  };
}

export default createPatient;
