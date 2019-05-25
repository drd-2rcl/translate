import React, { Component } from 'react'

import LanguageContext from '../contexts/language_context';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Enviar'
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;