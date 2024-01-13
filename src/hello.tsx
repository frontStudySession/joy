import React from 'react';
import styled from 'styled-components';

export const Hello = () => <HelloBox>Hello World</HelloBox>;

const HelloBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: Black;
  color: white;
  font-weight: 700;
`;
