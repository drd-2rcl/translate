import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag jm" onClick={() => this.props.onLanguageChange('english')} />
        <i className="flag br" onClick={() => this.props.onLanguageChange('português-br')} />
      </div>
    )
  }
}

export default LanguageSelector