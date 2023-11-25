import React, { Component } from "react";
import "./QuizComponent.css";

class QuizComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>Question</h1>
        </div>
        <div className="noOfQuestion">
          <p>1 of 15</p>
        </div>
        <div className="titleOfQuestion">
          <p>Which is the only mammal that can jump?</p>
        </div>
        <div className="options">
          <div>Dog</div>
          <div>Elephant</div>
          <div>Goat</div>
          <div>Lion</div>
        </div>
        <div className="buttons">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
