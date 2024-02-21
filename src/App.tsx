import React from 'react';

import './App.css';
import styled from 'styled-components';
import { Router } from '@routes/Router';
import Route from '@routes/Route';

import { Intro } from '@components/Intro';
import { Hello } from '@helpers/Hello';
import Form from '@components/Form';
import Heart from '@src/components/Heart';

function App() {
  return (
    <Router>
      <Route
        path="/"
        component={<Hello />}
      />
      <Route
        path="/intro"
        component={<Intro />}
      />
      <Route
        path="/form"
        component={<Form />}
      />
      <Route
        path="/heart"
        component={<Heart />}
      />
    </Router>
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
