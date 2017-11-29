import * as React from 'react';

import masterStore from './stores';
import { IDayType } from './stores/dataStore';

import './scss/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>{masterStore.data.days.map((day: IDayType) => <li key={day.date}>{JSON.stringify(day)}</li>)}</ul>
      </div>
    );
  }
}

export default App;
