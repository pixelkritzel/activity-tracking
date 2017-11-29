import * as React from 'react';

import masterStore from './stores';

import './scss/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>{masterStore.data.entries.map((entry: {}) => <li>{JSON.stringify(entry)}</li>)}</ul>
      </div>
    );
  }
}

export default App;
