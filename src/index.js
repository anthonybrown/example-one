import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';

import Credits from './components/Credits';
import Cubes from './components/Cubes';
import Lights from './components/Lights';
import Environment from './components/Environment';

function App() {
  return (
    <Canvas>
      {/* here you can pass a lot of options as props */}
      <Children /> {/* any Threejs objects(mesh, group or whatever) */}
      <Children /> {/* any Threejs objects(mesh, group or whatever) */}
    </Canvas>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
