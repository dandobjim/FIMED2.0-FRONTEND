import React, { useState } from "react";
import { css } from "@emotion/core";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Navbar from "../../components/Navbar";
import { CONSTANTS } from "../../shared/Constants";
import fetch from "node-fetch";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import { useUser } from "../../lib/hooks/useUser";

const updatePatient = ({ form, ID }) => {
  const user = useUser({ redirectTo: "/" });
  const cookie = Cookies.get("fimedtk");

  const [patient, setPatient] = useState(form);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: { value: e.target.value, type: e.target.type },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation

    fetch(`${CONSTANTS.API.url}/api/v2/patient/update/${ID} `, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify(patient),
    })
      .then((res) => {
        //console.log(patients);
        if (!res.ok) {
          throw res;
        }
        alert("Patient created satisfactory");
        return res.json();
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
        //Router.push("/createPatient");
      })
      .catch((err) => {
        console.log(`Error ${err.status}`);
        err.json().then((patients) => {
          patients.detail.map((item, index) => {
            alert(item.msg);
          });
        });
      });
  };
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
                  <h2>Update Patient</h2>
                  <hr />
                  <div>
                    <form
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                    >
                      {Object.entries(patient).map(([key, value], index) => {
                        return (
                          <div className="row" key={key}>
                            <div className="col-md-6 col-md">
                              <label className="control-label">{key}</label>
                              <input
                                className="form-control"
                                name={key}
                                value={value.value}
                                type={value.type}
                              ></input>
                            </div>
                          </div>
                        );
                      })}

                      <div className="col-sm-offset-2 col-sm-10">
                        <input
                          type="submit"
                          className="btn-sm btn-primary button-field"
                          css={css`
                            margin-top: 7px;
                          `}
                          value="Update Patient"
                        />
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
};

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allCookies = cookies(ctx);
  const res = await fetch(
    `${CONSTANTS.API.url}/api/v2/patient/search_by_patient_id?id_patient=${ctx.params.pid}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${allCookies.fimedtk}`,
      },
    }
  );

  const ID = ctx.params.pid;
  const form = await res.json();
  return {
    props: {
      form,
      ID,
    },
  };
}

export default updatePatient;
