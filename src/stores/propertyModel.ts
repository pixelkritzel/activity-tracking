import { types } from 'mobx-state-tree';

const propertyModel = types.model({
  name: types.string,
  value: types.number
});

export default propertyModel;
