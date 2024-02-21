import styled from 'styled-components';

export default function Heart() {
  return (
    <CenterBox>
      <img
        src="https://i.pinimg.com/originals/6e/19/56/6e195649034f042d1dea5230234570a8.gif"
        alt="heartIcon"
      />
    </CenterBox>
  );
}

const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: Black;
  width: 100%;
  height: 100%;
  & > img {
    width: 40%;
    height: fit-content;
  }
`;
