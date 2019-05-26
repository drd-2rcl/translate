import React, { Component } from 'react';

import UserCreate from './components/user_create'
import LanguageContext from './contexts/language_context';
import ColorContext from './contexts/color_context';

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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider> 
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App;