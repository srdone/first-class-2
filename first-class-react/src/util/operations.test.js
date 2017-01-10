import {
  id,
  addItem,
  getProperty,
  equals,
  matches,
  getId,
  matchesId,
  extend,
  findIndexByProperty,
  findIndexById,
  replaceItemAtIndex,
  removeItemById,
  replaceItemById,
  addStateItem,
  removeStateItem,
  updateStateItem
} from './operations';

it('function id: should return the original object', () => {
  var a = {};
  expect(id(a)).toBe(a);
});

it('function addItem: should add the item to the end of the array', () => {
  var array = ['a'];
  expect(addItem(array)('b')).toEqual(['a', 'b']);
});

it('function: getProperty: should return the named property on the object', () => {
  var obj = {a: 'b'};
  expect(getProperty('a')(obj)).toEqual('b');
});

it('function: equals: should return true when the values are equal', () => {
  expect(equals('a')('a')).toBe(true);
  expect(equals('a')('b')).toBe(false);
});

it('function: matches: should return true if the property specified on the objects is equal to the property value', () => {
  var obj1 = {a: 'a'};
  var matchesA = matches('a');
  expect(matchesA(obj1)('a')).toBe(true);
  expect(matchesA(obj1)('b')).toBe(false);
});

it('function: matchesId: should return true when the id property matches the passed value', () => {
  expect(matchesId('a')({id: 'a'})).toBe(true);
  expect(matchesId('b')({id: 'a'})).toBe(false);
});

it('function: extend: should assign properties on the original object and the new property to a new object', () => {
  expect(extend({a: 'a'})('a')('x')).toEqual({a: 'x'});
});

it('function: findIndexByProperty: should find the index of the object with the matching property value', () => {
  expect(findIndexByProperty('id')('a')([{id: 'b'}, {id: 'a'}])).toEqual(1);
});

it('function: findIndexById: should find the index of the item with the matching id', () => {
  expect(findIndexById('a')([{id: 'b'}, {id: 'a'}])).toEqual(1);
});

it('function: replaceItemAtIndex: should replace the item at index x in the array', function () {
  expect(replaceItemAtIndex(1)([1, 2, 3])(5)).toEqual([1, 5, 3]);
})