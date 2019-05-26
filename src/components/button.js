import React, { Component } from 'react'

import LanguageContext from '../contexts/language_context';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;