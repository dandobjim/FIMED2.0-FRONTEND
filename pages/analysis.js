import Head from "../components/Head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LogoContainer from "../components/Logo";
import Link from "next/link";

import { css } from "@emotion/core";
import { useUser } from "../lib/hooks/useUser";
import Cookies from "js-cookie";
import cookies from "next-cookies";



const analysis = () => {
  const user = useUser({ redirectTo: "/" });

  const cookie = Cookies.get("fimedtk");
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
                  <h2>Analysis</h2>
                  <hr />
                  <div className="col-md-6">
                    <h3>Create a Model</h3>
                    <Link href="/modelDesign">
                      <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Model design
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <h3>Use a Model for prediction's algorithm</h3>
                    <Link href="/prediction">
                      <button type="submit" className="btn btn-primary btn-lg btn-block">
                        Prediction
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
};

export async function getServerSideProps(ctx) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const allCookies = cookies(ctx);

  return {
    props: {
    },
  };
}

export default analysis;
