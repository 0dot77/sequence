import { useState } from 'react';
import FirstPopUpModal from '../components/first-popup-modal';
import styled from 'styled-components';
import { firstImgs } from '../db';

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(${(props) => props.backImg});
`;

const Footer = styled.footer`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1rem;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 0;

  p {
    font-size: 5rem;
    &.active {
      display: block;
      margin-bottom: 1rem;
    }

    &.hidden {
      display: none;
    }
  }
`;

export default function First() {
  const [clickNum, setClickNum] = useState(1);

  return (
    <Container backImg={clickNum === 1 ? null : firstImgs[clickNum - 2]}>
      <FirstPopUpModal clickNum={clickNum} setClickNum={setClickNum} />
      <Footer>
        <p className={clickNum >= 1 ? 'active' : 'hidden'}>사선과 중심</p>
        <p className={clickNum >= 2 ? 'active' : 'hidden'}>중심과 점</p>
        <p className={clickNum >= 3 ? 'active' : 'hidden'}>소실점과 방사</p>
        <p className={clickNum >= 5 ? 'active' : 'hidden'}>빛과 그림자</p>
        <p className={clickNum >= 6 ? 'active' : 'hidden'}>빛과 그림자가 만드는 공간의 깊이</p>
      </Footer>
    </Container>
  );
}
