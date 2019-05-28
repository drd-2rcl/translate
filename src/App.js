import React, { Component } from 'react';

import LanguageSelector from './components/language_selector';
import { LanguageStore } from './contexts/language_context';
import ColorContext from './contexts/color_context';
import UserCreate from './components/user_create'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />

          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;