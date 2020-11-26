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
import Link from "next/link";

const detailPatient = ({ form, ID }) => {
  const user = useUser({ redirectTo: "/" });
  const cookie = Cookies.get("fimedtk");

  const [patient, setPatient] = useState(form);

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
                  <h2>Patient Details</h2>
                  <hr />
                  <div>
                    <form encType="multipart/form-data"> 
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
                                readOnly
                              ></input>
                            </div>
                          </div>
                        );
                      })}
                    </form>
                    <br/>
                    <div className="col-sm-offset-2 col-sm-10">
                          <Link href="/patientList">
                            <a
                              type="button"
                              className="btn btn-primary"
                              css={css`
                                margin-top: 5rem;
                              `}
                            >Back to list</a>
                          </Link>                          
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

export default detailPatient;
