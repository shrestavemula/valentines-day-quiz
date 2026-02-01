import React, { Component } from 'react';

export default class Proposal extends Component {
  constructor() {
    super();
    this.state = {
      noButtonPosition: { top: '60%', left: '30%' },
      noButtonStyle: {}
    };
    this.handleNoHover = this.handleNoHover.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }

  handleNoHover() {
    const randomTop = Math.random() * 70 + 10;
    const randomLeft = Math.random() * 70 + 10;

    this.setState({
      noButtonPosition: {
        top: `${randomTop}%`,
        left: `${randomLeft}%`
      }
    });
  }

  handleYes() {
    this.setState({
      accepted: true
    });
  }

  render() {
    if (this.state.accepted) {
      return (
        <div className="Proposal celebration">
          <h1 className="big-text">🎉 YES! 🎉</h1>
          <p className="celebration-text">You've made me the happiest person!</p>
          <div className="hearts">
            <span>💕</span>
            <span>💖</span>
            <span>💗</span>
            <span>💝</span>
            <span>💕</span>
          </div>
        </div>
      );
    }

    return (
      <div className="Proposal">
        <h1 className="big-text">Will you be my Valentine?</h1>
        <div className="proposal-buttons">
          <button
            className="yes-button"
            onClick={this.handleYes}
          >
            Yes! 💕
          </button>
          <button
            className="no-button"
            style={{
              position: 'absolute',
              top: this.state.noButtonPosition.top,
              left: this.state.noButtonPosition.left,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={this.handleNoHover}
            onTouchStart={this.handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    );
  }
}
