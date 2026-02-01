import React, { Component } from 'react';
import Quiz from './Quiz';
import Proposal from './Proposal';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quizComplete: false
    };
    this.handleQuizComplete = this.handleQuizComplete.bind(this);
  }

  handleQuizComplete() {
    this.setState({
      quizComplete: true
    });
  }

  render() {
    return (
      <div className='App'>
        {!this.state.quizComplete ? (
          <Quiz onComplete={this.handleQuizComplete} />
        ) : (
          <Proposal />
        )}
      </div>
    );
  }
}
