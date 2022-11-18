import type { NextPage } from 'next';
import styled from 'styled-components';
import MainLink from '../components/atoms/mainLink/mainLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => (
  <Container>
    <MainLink href="/game" text="Kontynuuj" />
    <MainLink href="/newGame" text="Nowa Gra" />
    <MainLink href="/editor" text="Edytor Etapów" />
    <MainLink href="/instruction" text="Instrukcja" />
    <MainLink href="/statistics" text="Statystyki" />
  </Container>
);

export default Home;
