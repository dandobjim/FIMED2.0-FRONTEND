import React, { useState } from "react";
import { css } from "@emotion/core";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import LogoContainer from "../../components/Logo";
import Navbar from "../../components/Navbar";
import { CONSTANTS } from "../../shared/Constants";
import fetch from "node-fetch";

const updatePatient = ({ form }) => {
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
                  <h2>Update Patient</h2>
                  <hr />
                  <div>
                    <form
                      id="update-patient"
                      method="post"
                      encType="multipart/form-data"
                    >
                      {form.map((s, index) => {
                        console.log(s.clinical_information);
                      })}
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
  const res = await fetch(
    `${CONSTANTS.API.url}/api/v2/patient/search_by_patient_id?id_patient=${ctx.params.pid}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNYW51ZWwiLCJleHAiOjE1OTYwMTkwNDZ9.FUi9SxM9Iu1x7kBDSCLYCYtErYBBvzucy-uUTlbA3LM",
      },
    }
  );

  const form = await res.json();
  console.log(form);
  // console.log(form.clinical_information)
  return {
    props: {
      form,
    },
  };
}

export default updatePatient;
