import { compose, remove, findIndex } from 'lodash/fp';

export const trace = tag => value => {
  console.log(tag, value);
  return value;
}

export const id = x => x;

export const addItem = array => item => [...array, item];

export const getProperty = propName => obj => obj[propName];

export const equals = a =>
  b =>
  a === b;

export const matches = propName =>
  obj =>
  propValue =>
  equals(getProperty(propName)(obj))(propValue);

export const getId = getProperty('id');

export const matchesId = id =>
  obj =>
  compose(equals(id), getId)(obj);

export const extend = originalObject =>
  updatedProperty =>
  updatedValue =>
  Object.assign({}, originalObject, {[updatedProperty]: updatedValue});

export const findIndexByProperty = propName =>
  propertyValue =>
  array =>
  findIndex({[propName]: propertyValue})(array);

export const findIndexById = findIndexByProperty('id');

export const replaceItemAtIndex = index =>
  array =>
  item =>
  [...array.slice(0, index + 1), item, ...array.slice(index + 1, array.length)];

export const removeItemById = id =>
  array =>
  remove(matchesId(id))(array);

export const replaceItemById = array =>
  itemId =>
  newItem => 
  replaceItemAtIndex(findIndexById(itemId)(array))(array)(newItem);

export const addStateItem = state =>
  arrayName =>
  newItem =>
  extend(state)(arrayName)(
    addItem(getProperty(arrayName)(state))(newItem)
  );

export const removeStateItem = state =>
  arrayName =>
  itemId =>
  extend(state)(arrayName)(
    removeItemById(itemId)(getProperty(arrayName)(state))
  );

export const updateStateItem = state =>
  arrayName =>
  updatedItem =>
  extend(state)(arrayName)(
    replaceItemById(getProperty(arrayName))(getId(updatedItem))(updatedItem)
  );