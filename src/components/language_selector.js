import React, { Component } from 'react';

import LanguageContext from '../contexts/language_context';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i className="flag jm" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag br" onClick={() => this.context.onLanguageChange('português-br')} />
      </div>
    )
  }
}

export default LanguageSelector