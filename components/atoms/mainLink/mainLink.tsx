import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled(Link)`
  margin: 1rem 1rem;
  padding: 1rem 1rem;
  border: green solid 0.5rem;
`;

type MainLinkProps = {
  href: string;
  text: string;
};

const MainLink: React.FC<MainLinkProps> = ({ href, text }) => (
  <Container href={href}>{text}</Container>
);

export default MainLink;
