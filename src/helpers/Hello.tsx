import React from 'react';
import styled from 'styled-components';

export const Hello = () => {
  return (
    <HelloBox>
      <a href="/intro">눌러보세용🐶</a>
      <br />
      <a href="/heart">눌러보세용💗</a>
      <br />
      <a href="/form">눌러보세용📑</a>
    </HelloBox>
  );
};

const HelloBox = styled.div`
  font-family: 'DNFBitBitv2';
  font-size: 1.5rem;
  padding: 1.5rem;
  a {
    text-decoration: none;
    color: Black;
  }
`;
