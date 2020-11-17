import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Cookies from "js-cookie";
import cookies from "next-cookies";
import axios from "axios";

import Head from "../components/Head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CONSTANTS } from "../shared/Constants";
import LogoContainer from "../components/Logo";
import { useUser } from "../lib/hooks/useUser";
import { Posts } from "../components/Posts";
import Pagination from "../components/Pagination";

function patientList() {
  const user = useUser({ redirectTo: "/" });
  const cookie = Cookies.get("fimedtk");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`${CONSTANTS.API.url}/api/v2/patient/all`, {
        headers: { Authorization: `Bearer ${cookie}` },
      });
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const curretPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
                <Posts posts={curretPost} loading={loading} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={posts.length}
                  paginate = {paginate}
                />
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
  return {
    props: {},
  };
}

export default patientList;
