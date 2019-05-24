import React, { Component } from 'react';

import UserCreate from './components/user_create'

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag br" onClick={() => this.onLanguageChange('português-br')} />
          <i className="flag jm" onClick={() => this.onLanguageChange('english')} />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App;