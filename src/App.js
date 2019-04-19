import React, { Component } from 'react';
import LandmarkCard from "./components/LandmarkCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Header";
import landmarks from "./landmark.json";

class App extends Component {
  // Setting this.state.landmarks to the landmarks json array
  state = {
    landmarks,
    score: 0,
    highScore: 0,
  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.landmarks)
    return (




      <Wrapper>
        <Title>Landmarks Clicky Game</Title>
        {this.state.landmarks.map(landmark => (
          <LandmarkCard
            id={landmark.id}
            key={landmark.id}
            alt={landmark.name}
            src={landmark.image}
          />
        ))}
      </Wrapper>
    );
    /* <FriendCard />
     Console.log(landmark.image)
     (<img key = {landmark.name} src = {landmark.image } alt={landmark.name}></img>)
    //   ))
    // } */




  }
}


export default App;
