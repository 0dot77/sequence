import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: hidden;
  img {
    width: 500px;
    height: 500px;
    z-index: 1000;
  }
`;

const CloseContainer = styled.div`
  width: 500px;
  height: 620px;
  position: absolute;
  display: flex;
  justify-content: end;
  z-index: 2000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Close = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
`;

//TODO: location을 확인해서 각 로케에 맞는 이미지로 바꾸기
export default function FirstPopUpModal({ clickNum, setClickNum }) {
  return (
    <MainContainer>
      <ImgContainer>
        <img src={`/assets/first/${clickNum}.jpeg`} />
      </ImgContainer>
      <CloseContainer>
        <Close
          onClick={() => {
            if (clickNum < 6) {
              setClickNum(clickNum + 1);
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              fill="white"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </Close>
      </CloseContainer>
    </MainContainer>
  );
}
