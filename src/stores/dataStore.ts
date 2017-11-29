import { types } from 'mobx-state-tree';

import entryModel, { IEntryModelType } from './entryModel';

import tesJSON from './testJSON';

let testData;

try {
  testData = JSON.parse(tesJSON);
} catch (e) {
  console.log(e);
}

export type IDayType = {
  date: string;
  entries: IEntryModelType[];
};

const dataStoreModel = types
  .model('DataStore', {
    entries: types.array(entryModel)
  })
  .views(self => {
    return {
      get days() {
        const days: IDayType[] = [];
        self.entries.forEach(entry => {
          const dayForEntry = days.find(day => day.date === entry.date);
          if (dayForEntry) {
            dayForEntry.entries.push(entry);
          } else {
            days.push({
              date: entry.date,
              entries: [entry]
            });
          }
        });
        return days;
      }
    };
  });

const dataStore = dataStoreModel.create({
  entries: testData
});

export default dataStore;
