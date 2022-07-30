import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.section`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 9999;
`;

const Title = styled.p`
  font-family: Mainfont;
  font-size: 5rem;
  text-align: center;
`;

const IndexContainer = styled.section`
  width: 300px;
  height: 300px;
  text-align: center;
`;

export default function Home() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Sequence</Title>
      </TitleContainer>
      <IndexContainer>
        <Link to={'/first'}>first.</Link>
      </IndexContainer>
    </MainContainer>
  );
}
