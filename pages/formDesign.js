import React, { useState } from "react";
import { CONSTANTS } from "../shared/Constants";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoContainer from "../components/Logo";
import { css } from "@emotion/core";
import { useUser } from "../lib/hooks/useUser";
import Router from "next/router";
import fetch from "node-fetch";
import Cookies from "js-cookie";
import cookies from "next-cookies";

const DEFAULT_SELECTION = "String";

const formDesign = ({ form_row }) => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");
  useState(form_row);

  const [rows, setRows] = useState(form_row);

  const incrRow = () => {
    setRows([...rows, { name: "", rtype: DEFAULT_SELECTION }]);
  };

  const delRow = () => {
    const tmpRows = rows;
    tmpRows.pop();
    setRows([...tmpRows]);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const _rows = [...rows];
    _rows[e.target.dataset.id][e.target.name] = e.target.value;

    setRows(_rows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${CONSTANTS.API.url}/api/v2/form/create`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({ rows: rows }),
    }).then((res) => {
      //console.log(res);
      alert("Form created satisfactory, redirect to home page");
      Router.push("/home");
    });
  };

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
              <div className=" panel-body">
                <div
                  className="page-Head"
                  css={css`
                    margin-top: 0px;
                  `}
                >
                  <LogoContainer />
                </div>
                <hr />

                <form
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                  encType="multipart/form-data"
                >
                  {rows.map((s, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="col-md-6 col-md">
                          <label className="control-label">{`Name #${
                            index + 1
                          }: `}</label>
                          
                          <input
                            className="form-control"
                            data-id={index}
                            name="name"
                            type="text"
                            value={s.name}
                          />

                          
                          <div className="form-group">
                            <label className="control-label">Type:</label>
                            <select
                              className="form-control"
                              data-id={index}
                              name="rtype"
                              defaultValue={s.rtype}
                            >
                              <option value="String">String</option>
                              <option value="Integer">Number</option>
                              <option value="Date">Date</option>
                              <option value="Boolean">Boolean</option>
                              <option value="Textarea">textarea</option>
                            </select>
                            <br />
                            <hr />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <input
                    type="submit"
                    value="Submit"
                    className="btn-sm btn-primary button-field"
                  />
                </form>

                <button
                  className="btn-sm btn-primary button-field"
                  onClick={incrRow}
                >
                  Add row
                </button>
                <button
                  className="btn-sm btn-primary button-field"
                  onClick={delRow}
                >
                  Delete Row
                </button>
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
  const res = await fetch(`${CONSTANTS.API.url}/api/v2/form/see_form`, {
    method: "GET",
    headers: { Authorization: `Bearer ${allCookies.fimedtk}` },
  });

  var form_row = await res.json();
  {
    form_row == null ? (form_row = []) : null;
  }
  return {
    props: {
      form_row,
    },
  };
}

export default formDesign;
