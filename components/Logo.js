import Link from 'next/link';
import styled from '@emotion/styled';

const Logo = styled.img`
    margin-left: 1rem;
    margin-right: 2rem;
`;

const LogoContainer = () => {
  return (
    <Link href="/">
      <Logo className="logo" src="/static/img/logo.png" />
    </Link>
  );
}

export default LogoContainer;