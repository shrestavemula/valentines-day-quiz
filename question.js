import React, { Component } from 'react';

export default class Question extends Component {
  render() {
    const { question, options, onAnswer, showFeedback, isCorrect } = this.props;

    return (
      <div className="Question">
        <h2>{question}</h2>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => onAnswer(index)}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '💕 Correct! Moving on...' : '❌ Try again!'}
          </div>
        )}
      </div>
    );
  }
}
