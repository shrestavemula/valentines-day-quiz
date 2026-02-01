import React, { Component } from 'react';
import Question from './Question';

const questions = [
  {
    question: "What fruit/vegetable do we like to be ethically sourced?",
    options: ["Lemons", "Carrots", "Tomatoes", "Broccoli"],
    correctAnswer: 0
  },
  {
    question: "What's my favorite thing about you?",
    options: ["Your eyes", "Your jokes", "Your kindness", "Everything"],
    correctAnswer: 3
  },
  {
    question: "What was our first date?",
    options: ["The mall", "A coffee shop", "The beach", "A restaurant"],
    correctAnswer: 0
  },
  {
    question: "If I had to live off of one kind of food for the rest of my life, what would it be?",
    options: ["Pizza", "Chicken nuggets", "Tacos", "Sushi"],
    correctAnswer: 1
  },
  {
    question: "What animal do you compare me?",
    options: ["A cat", "A gecko", "A dog", "A rabbit"],
    correctAnswer: 1
  }
];

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      score: 0,
      showFeedback: false,
      isCorrect: false
    };
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(answerIndex) {
    const correct = answerIndex === questions[this.state.currentQuestion].correctAnswer;

    this.setState({
      showFeedback: true,
      isCorrect: correct
    });

    setTimeout(() => {
      if (correct) {
        const newScore = this.state.score + 1;
        const nextQuestion = this.state.currentQuestion + 1;

        if (nextQuestion >= questions.length && newScore === questions.length) {
          this.props.onComplete();
        } else if (nextQuestion < questions.length) {
          this.setState({
            currentQuestion: nextQuestion,
            score: newScore,
            showFeedback: false
          });
        }
      } else {
        this.setState({
          showFeedback: false
        });
      }
    }, 1500);
  }

  render() {
    const { currentQuestion, showFeedback, isCorrect } = this.state;
    const question = questions[currentQuestion];

    return (
      <div className="Quiz">
        <div className="QuizCard">
          <div className="progress">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <Question
            question={question.question}
            options={question.options}
            onAnswer={this.handleAnswer}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
          />
        </div>
      </div>
    );
  }
}
