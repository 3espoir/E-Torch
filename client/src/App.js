import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';

function App() {
  
  const Header = styled.header`
  overflow: visible;
  width: 100%;
  position: absolute;
  z-index: 1;
  `
  
  return (
    <div className="App">


      <Header>
        <png src={logo} className="App-logo" alt="logo" />
        E-Torch
      </Header>
    </div>
  );
}

export default App;
