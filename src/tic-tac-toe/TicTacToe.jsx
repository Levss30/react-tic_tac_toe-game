import React from 'react'
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png"
import "./TicTacToe.css"

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic Tac Toe Game</h1>
        <div className='board'>

        </div>
        <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe