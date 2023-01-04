import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
  height: 70px;
  color: white;
  border: red 2px solid;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  href: string;
  children: React.ReactNode;
};

const MainLink: NextPage<Props> = ({ href, children }) => (
  <Wrapper href={href}>{children}</Wrapper>
);

export default MainLink;
