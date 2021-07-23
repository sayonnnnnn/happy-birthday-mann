import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;
    new p5(sketch(canvasDivElement, 'Happy Birthday Mann'), canvasDivElement);
  })
  return (
    <div className="main">
      <div ref={canvasRef} />
    </div >
  )
}

export default App;
