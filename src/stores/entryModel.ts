import { types } from 'mobx-state-tree';

import propertyModel from './propertyModel';

const entryModel = types.model({
  date: types.string,
  time: types.string,
  activities: types.array(types.string),
  properties: types.array(propertyModel),
  notes: types.string
});

export default entryModel;
