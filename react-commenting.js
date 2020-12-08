// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) This line is used to send data upstream and connect with child components
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2) This is the constructor method us for the creation of an object from the class.
  constructor(props){
    super(props)
    // 3) This is to set state to certain conditions
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4) This is destructuring
    let { rollImages, diceLog } = this.state
    // 5)This is coding for a random number between 1 and the 6
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) This is setting state
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7) Must put render in order to render all stuff enclosed onto webpage.
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 8) Calling the child element so that it renders
        <Dice
          // 9) using an id tag to attach method and pass into child compoenet
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) This tag is needed to link everything back together.
export default Board
