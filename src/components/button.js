import React, { Component } from 'react'

import LanguageContext from '../contexts/language_context';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;