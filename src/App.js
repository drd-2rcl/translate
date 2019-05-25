import React, { Component } from 'react';

import LanguageContext from './contexts/language_context';
import UserCreate from './components/user_create'

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    const { language } = this.state;
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag jm" onClick={() => this.onLanguageChange('english')} />
          <i className="flag br" onClick={() => this.onLanguageChange('português-br')} />
        </div>
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider> 
      </div>
    )
  }
}

export default App;