import React from 'react';
import boxes from './boxes';
import './App.css';
import './Box';
import Box from './Box';

export default function BoxToggle() {
  const [squares, setSquares] = React.useState(boxes);

  // const styles = {
  //   backgroundColor: props.darkMode ? '#222222' : '#cccccc',
  // };

  // <App darkMode={true} /> /* index.js */;

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        // second way
        return square.id === id ? { ...square, on: !square.on } : square;
      });
      // const newSquares = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on,
      //     };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }
      // return newSquares; // first way
    });
  }

  const squareElements = squares.map((square) => (
    // <Box key={square.id} id={square.id} on={square.on} toggle={toggle} /> // first way
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)} // second way
    />
  ));
  return <main>{squareElements}</main>;
}
