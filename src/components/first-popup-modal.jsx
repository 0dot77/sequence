import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
    overflow-y: hidden;
    margin: 0;
  }
`;

//TODO: location을 확인해서 각 로케에 맞는 이미지로 바꾸기
export default function FirstPopUpModal({ clickNum, setClickNum }) {
  return (
    <MainContainer>
      <img
        src={`/assets/first/${clickNum}.jpeg`}
        onClick={() => {
          if (clickNum < 6) {
            setClickNum(clickNum + 1);
          }
        }}
      />
    </MainContainer>
  );
}
