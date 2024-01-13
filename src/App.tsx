import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Hello } from '@app/Hello';
import { CracoTest } from '@pages/CracoTest';
import { Intro } from '@components/Intro';

function App() {
  return (
    <MyApp>
      <Hello />
      <Intro />
      <CracoTest />
    </MyApp>
  );
}

const MyApp = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
