export function addItem<T,U>(newItem: T & {id: string}, state: U & {ids: string[], entities: {}}): U {
  let newIds = [...state.ids, newItem.id];
  let newEntities = Object.assign({}, state.entities, {[newItem.id]: newItem});
  return Object.assign({}, state, {ids: newIds, entities: newEntities});
}

export function removeItem<T>(itemId: string, state: T & {ids: string[], entities: {}}): T {
  let index = state.ids.findIndex(id => id === itemId);
  let newIds = [...state.ids.slice(0, index), ...state.ids.slice(index + 1, state.ids.length)];
  let newEntities = Object.assign({}, state.entities);
  delete newEntities[itemId];
  return Object.assign({}, state, {ids: newIds, entities: newEntities});
}

export function updateItem<T, U>(item: T & {id: string}, state: U & {ids: string[], entities: {}}): U {
  let newScout = Object.assign({}, state.entities[item.id], item);
  let newEntities = Object.assign({}, state.entities, {[item.id]: newScout});
  return Object.assign({}, state, {entities: newEntities});
}
