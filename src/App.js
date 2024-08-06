import React, { useState } from 'react';
import './App.css';
import {COLORS} from './constants.js'

export default function App() {
  const [dots, setDots] = useState([]);
  const [undoList, setUndoList] = useState([])

  function handleClick(e){
    let x = e.pageX;
    let y = e.pageY;
    let randomIndex = Math.floor(Math.random() * COLORS.length);
    let newDots = [...dots,[x-15, y-15, COLORS[randomIndex]]]
    setDots(newDots)
  }

  function handleUndo(e) {
    // e.stopPropagation();
    let newUndo = dots.pop()
    setDots(dots)
    setUndoList([...undoList, newUndo])
    // Add logic for undo, redo, reset here
  }

  function handleRedo(e) {
    // e.stopPropagation();
    // Add logic for undo, redo, reset here
    if(undoList.length) {
      let newRedo = undoList.pop()
      setUndoList(undoList)
      setDots([...dots, newRedo])
    }
  }

  function handleReset(e) {
    // e.stopPropagation();
    setUndoList([])
    setDots([])
    // Add logic for undo, redo, reset here
  }

  return (
    <div className = "container">
      <div className="buttons">
          <button className="funButton" onClick={handleUndo}>Undo</button>
          <button className="funButton" onClick={handleRedo}>Redo</button>
          <button className="funButton" onClick={handleReset}>Reset</button>
      </div>
      <div className="board" onClick={handleClick}>

          {dots.map((dot, index) => (
            <div
              key={index}
              onClick={handleClick}
              className="dot"
              style={{ top: `${dot?.[1]}px`, left: `${dot?.[0]}px`, backgroundColor: dot?.[2]}}>
            </div>
          ))}
      </div>
    </div>
  );
}
