import React, { Component } from 'react';

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
        {this.state.language}
      </div>
    )
  }
}

export default App;