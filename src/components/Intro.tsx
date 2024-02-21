import styled from 'styled-components';

export const Intro = () => {
  return (
    <CenterBox>
      <img
        src="https://i.pinimg.com/originals/f4/2c/da/f42cdaf011eb7ebe9f2ff767df3f60dd.gif"
        alt="img"
      />
    </CenterBox>
  );
};

const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & > img {
    width: 30%;
  }
`;
