import React, { Component } from 'react'

import LanguageContext from '../contexts/language_context';
import ColorContext from '../contexts/color_context';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        { color => this.renderButton(color) }
      </ColorContext.Consumer>
    )
  }
}

export default Button;