import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';

import Credits from './components/Credits';
import Cubes from './components/Cubes';
import Lights from './components/Lights';
import Environment from './components/Environment';

import './styles.css';

function App() {
  return (
    <>
      <Credits />
      <Canvas>
        <Cubes />
        <Lights />
        <Environment />
      </Canvas>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
