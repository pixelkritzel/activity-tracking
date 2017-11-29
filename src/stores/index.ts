import { observable } from 'mobx';

import dataStore from './dataStore';

const masterStore = observable({
  data: dataStore
});

export default masterStore;
