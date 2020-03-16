import React, { Component } from 'react'
import Classes from './components/Classes';
import Navigation from './components/Navigation';
import Chatbox from './components/Chatbox';
import './App.scss';
import jennica from './images/jennica.jpg';
import rowell from './images/rowell.jpg';



export class App extends Component {

state = {
  id:1,
  message: 'Jer Carlos'
}

  render() {
    return (
      <div className="App">
         <Navigation />
      <div className="main-section">
     
       <Classes subject="CS" section="1A" teacher="Jennica Montoya" imgsrc={jennica} />
      <Classes subject="PE 212" section="CS 1A" teacher="Rowell Cruz" imgsrc={rowell} />

      <Chatbox />
      </div>

    </div>
    )
  }
}

export default App

