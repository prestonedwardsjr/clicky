// import React, { Component } from 'react';
// import './App.css';
// import landmarks from "./landmark.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor (){
    super()
    this.state=
    {landmarks:landmarks}
  }
  render() {

    console.log (this.state.landmarks)
    return (
      <div className="App">

        <div className="header">
          <h1>Clicky Game</h1>
          <h1>Score</h1>
          <h1>TOP Score</h1>
          <h1>You Guess correctly</h1>

        </div>
        <div className="imagecontainer">
        {
          this.state.landmarks.map(landmark => {
            console.log(landmark.image)
            return (<img key = {landmark.name} src = {landmark.image } alt={landmark.name}></img>)
          })
        }
         </div>
      </div>
    );
  }
}

export default App;
