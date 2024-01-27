import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Intro } from '@components/Intro';
import { Hello } from '@helpers/Hello';
import Form from '@components/Form';

function App() {
  return (
    <MyApp>
      <Form />
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
