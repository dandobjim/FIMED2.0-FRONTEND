import Head from "../components/Head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LogoContainer from "../components/Logo";
import { css } from "@emotion/core";
import { useUser } from "../lib/hooks/useUser";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import {useState} from "react";
import axios from "axios";
import { CONSTANTS } from "../shared/Constants";


const prediction = () => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");
  const [file, setFile] = useState({});
  const [data, setData] = useState([]);

  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("file", file);
    axios({
      url: `${CONSTANTS.API.url}/api/v2/analysis/prediction`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
      data: formdata,
    }).then((res) => {
      alert("File upload suscessfully");
      setData(res.data)
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
                  `}>
                  <LogoContainer />
                  <h2>Prediction</h2>
                  <hr />
                  <div>
                    <div className="">
                      <label>Select File</label>
                      <input type="file" name="file" onChange={(e) => handleFile(e)} />
                      <br />
                      {data.length > 0 && <> <hr/><span className ="center">[{data.join(', ')}]</span><hr/></>}
                      <button type="button" onClick={(e) => handleUpload(e)} className="btn btn-primary">
                        {" "}
                        Upload{" "}
                      </button>
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

  return {
    props: {},
  };
}

export default prediction;
