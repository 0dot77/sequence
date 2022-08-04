import { useEffect, useState } from 'react';
import FirstPopUpModal from '../components/first-popup-modal';
import { windowPopUpSize } from '../db';

//TODO: 1. 페이지에 접근하면, 팝업이 1초 뒤에 뜨도록

export default function First() {
  const [clickNum, setClickNum] = useState(1);
  return (
    <>
      <FirstPopUpModal clickNum={clickNum} setClickNum={setClickNum} />
    </>
  );
}
