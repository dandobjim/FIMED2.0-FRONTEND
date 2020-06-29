import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

const Logo = styled.img`
    margin-left: 1rem;
    margin-right: 2rem;
`;



const Header_loging = () => {
    return ( 
        <header>
            <div className="container">
                <div>
                    <Link href="/">
                            <Logo className="logo" src="/static/img/Fimed_logo.png" />
                    </Link>
                    <h2>Login Page:</h2>
                </div>
            </div>
        </header>
     );
}
 
export default Header_loging;