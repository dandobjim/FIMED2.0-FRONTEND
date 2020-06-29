import React from 'react';
import Head from 'next/head';

const HeadLoging = () => {
    return ( 
        <Head>
        <html lang='es' />
        <title>FIMED</title>
        <link rel="shortcut icon" href='/static/img/Fimed_logo.png' type="image/x-icon"/>


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link href='<c:url value="/vendors/bootstrap/css/bootstrap.min.css" />' rel="stylesheet"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"/>
        <link href="vendors/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen"/>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/css/bootstrapValidator.min.css"/>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" 
          rel="stylesheet"
        />
          <link href = "/static/css/style.css" rel="stylesheet"/>
      </Head>
     );
}
 
export default HeadLoging;