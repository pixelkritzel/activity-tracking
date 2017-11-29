import { types } from 'mobx-state-tree';

import entryModel from './entryModel';

import tesJSON from './testJSON';

let testData;

try {
  testData = JSON.parse(tesJSON);
} catch (e) {
  console.log(e);
}

const dataStoreModel = types.model('DataStore', {
  entries: types.array(entryModel)
});

const dataStore = dataStoreModel.create({
  entries: testData
});

export default dataStore;
