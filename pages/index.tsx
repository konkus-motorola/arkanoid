import type { NextPage } from 'next';
import styled from 'styled-components';
import MainLink from '../components/atoms/MainLink/mainLink';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url('/render2.gif');
  background-size: cover;
`;

const Home: NextPage = () => (
  <Wrapper>
    <MainLink href="./continue">KONTYNUUJ</MainLink>
    <MainLink href="./new-game">NOWA GRA</MainLink>
    <MainLink href="./options">OPCJE</MainLink>
    <MainLink href="./editor">EDYTOR ETAPOW</MainLink>
    <MainLink href="./instruction">INSTRUKCJA</MainLink>
  </Wrapper>
);

export default Home;
