import React from "react";

const Head = () => {
  return (
    <>
      {/* Meta tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="FIMED is a web-service oriented to provide users flexible integration of biomedical data and gene expression analysis from multiple sources"
      />
      <meta
        name="author"
        content="Khaos Group. Language and Computing Science Department. University of Malaga"
      />

      <title>FIMED</title>

      {/* Favicon */}
      <link
        rel="shortcut icon"
        href="/static/img/logo.png"
        type="image/x-icon"
      />

      {/* Core CSS */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <link
        href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link href="/static/css/style.css" rel="stylesheet" />
      <link href="/static/css/styleform.css" rel="stylesheet" />

      {/* jQuery */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script
        defer
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      ></script>

      {/* jQuery bootstrap validator */}
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css"
      />
      <script
        defer
        type="text/javascript"
        src="//cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"
      ></script>

      {/* Cookies */}
      <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
    </>
  );
};

export default Head;
