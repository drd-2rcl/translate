import React, { Component } from 'react';

import LanguageSelector from './components/language_selector';
import LanguageContext from './contexts/language_context';
import ColorContext from './contexts/color_context';
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
        <LanguageSelector onLanguageChange={this.onLanguageChange} />

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