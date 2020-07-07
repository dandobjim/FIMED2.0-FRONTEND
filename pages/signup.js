import React, {Component} from 'react';
import { css } from '@emotion/core';
import Footer from '../components/Footer';
import Link from 'next/link';
import Header from '../components/Header';
import LogoContainer from '../components/Logo';


class Signup extends Component{
	constructor(props){
		super(props)
		this.state = {
			submitting: false,
			submitted: false
		}
	}
	submitForm(data){
		fetch('http:/localhost:8080/api/v2/auth/register', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res)=>{
			res.status === 200 ? this.setState({submitted:true}): ''
		})
	}
	render (){
		const title = 'Sign Up'
	return (
		<>
    	<head>
        	<Header />
      	</head>
      	<body>
        	<main>
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="page-header" css={css` margin-top:0px; `}>
								<LogoContainer/>
								<h2>Registration Page</h2>
							</div>
							<form id="login" method="post" enctype="multipart/form-data" acceptcharset="UTF-8" >
								<div className="form-group">
									<label for="name" className="col-sm-2 control-label">Name</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="name" name="name" />
									</div>
								</div>
								<br />
								<div className="form-group">
									<label for="name" className="col-sm-2 control-label">Surname</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="apellidos" name="apellidos" />
									</div>
								</div>
								<br />
								<div className="form-group">
									<label for="email" className="col-sm-2 control-label">Email</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="email" name="email" />
									</div>
								</div>
								<br />
								<div className="form-group">
									<label for="username" className="col-sm-2 control-label">Username</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="username" name="username" />
									</div>
								</div>
								<br />
								<div className="form-group">
									<label for="password" className="col-sm-2 control-label">Password</label>
									<div className="col-sm-10">
										<input type="password" className="form-control" id="password" name="password" />
									</div>
								</div>
								<br />
								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
											<button id="execBtn" type="submit" className="btn btn-primary" css={css`margin-top: 7px;`}>Sign up</button>
									</div>
								</div>
							</form>
							<br /><br /><br />
							<form  >
								<div className="form-group">
									<a css={css`font-family:bold;`}>Come back to Login page: </a>
										<Link href = "/">
											<button type="submit" className="btn btn-primary" css={css`margin-top: 7px; margin-left: 7px;`}>Go to login</button>
										</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
        	</main>
			<Footer />
      	</body>
		</>
	);
	}
}

export default Signup;