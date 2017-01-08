import { compose, remove, findIndex } from 'lodash/fp';

//experimenting with fp - yuck - need to understand compose much better than I do

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

export const findIndexByProperty = propName => itemId => array => findIndex({[propName]: itemId})(array);

export const findIndexById = findIndexByProperty('id');

export const replaceItemAtIndex = index => array => item => [...array.slice(0, index + 1), item, ...array.slice(index + 1, array.length)];

export const removeItemById = id =>
  array =>
  remove(matchesId(id))(array);

//yuck - this reorders and creates an empty spot in the array
export const replaceItemById = array =>
  itemId =>
  newItem => 
  addItem(removeItemById(itemId))(newItem);

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

// export const updateStateItem
const array = [{id: 'a'}, {id: 'b'}];

console.log(replaceItemAtIndex(1)([1, 2, 3])(100));
console.log(removeItemById('a')([{id: 'a'}, {id: 'b'}]));
console.log(replaceItemById(array)('a')('x'));
console.log(addItem([])('id'));
console.log(getProperty('ids')({ids: ['a']}));
console.log(extend({a: 'a'})('a')('b'));
console.log(equals('a')('a'));
console.log(matchesId('a')({id: 'a'}));
console.log(matches('id')({id: 'a'})('b'));
console.log(addStateItem({items: []})('items')('id'));
console.log(removeStateItem({items: [{id: 'a'}]})('items')('a'));