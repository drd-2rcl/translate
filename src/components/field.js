import React, { Component } from 'react'
import LanguageContext from '../contexts/language_context';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Nome';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;