import React, { Component } from 'react'

import LanguageContext from '../contexts/language_context';
import ColorContext from '../contexts/color_context';

class Button extends Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Enviar';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
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