import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import { thisTypeAnnotation } from "@babel/types";


  class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      friends,
      score: 0,
      highscore: 0
      
    };
  
    gameOver = () => {
      if (this.state.score > this.state.highscore) {
        this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
      }
      this.state.friends.forEach(card => {
        card.count = 0;
      });
      alert(`Game Over :( \nscore: ${this.state.score}`);
      this.setState({score: 0});
      return true;
    }
  
    clickCount = id => {
      console.log("clicked", id)
      var newFriends = [...this.state.friends]
      this.state.friends.find((o, i) => {
        if (o.id === id) {
          if(friends[i].clicked == false){
            newFriends[i].clicked = true;
            newFriends.sort(() => Math.random() - 0.5)
            this.setState({score : this.state.score + 1, friends: newFriends }, function(){
              console.log(this.state.score);
            });

          
            return true; 
          } else {
            this.gameOver();
          }
        }
 
      })
    }
    // score = () => {
    //   this.setState({score: this.state.score + 1})
    // }
    // // }
    // Map over this.state.friends and render a cardCard component for each card object
    render() {
      return (
        <Wrapper>
          <Title score={this.state.score} highscore={this.state.highscore} ></Title>
          {this.state.friends.map(friend => (
            <FriendCard
             clickCount={this.clickCount}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default App;