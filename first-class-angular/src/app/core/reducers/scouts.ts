import { createSelector } from 'reselect';

import { Scout } from '../models';
import * as scout from '../actions/scout';

export interface State {
  ids: string[],
  entities: { [id: string]: Scout },
  selectedScoutId: string | null;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedScoutId: null
}

export function reducer(state = initialState, action: scout.Actions): State {
  switch (action.type) {
    case scout.ActionTypes.CREATE_SCOUT: {
      let newIds = [...state.ids, action.payload.id];
      let newScout = action.payload;
      let newEntities = Object.assign({}, state.entities, {[action.payload.id]: newScout})
      return Object.assign({}, state, {ids: newIds, entities: newEntities});
    }
    
    case scout.ActionTypes.DELETE_SCOUT: {
      let index = state.ids.findIndex(id => id === action.payload);
      let newIds = [...state.ids.slice(0, index - 1), ...state.ids.slice(index + 1, state.ids.length - 1)];
      let newEntities = Object.assign({}, state.entities);
      delete newEntities[action.payload];
      return Object.assign({}, state, {ids: newIds, entities: newEntities});
    }

    case scout.ActionTypes.UPDATE_SCOUT: {
      let newScout = Object.assign({}, state.entities[action.payload.id], action.payload);
      let newEntities = Object.assign({}, state.entities, {[action.payload.id]: newScout});
      return Object.assign({}, state, {entities: newEntities});
    }

    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedScoutId;

export const getSelected = createSelector(
  getEntities,
  getSelectedId,
  (entities, selectedId) => entities[selectedId]
);

export const getAll = createSelector(
  getEntities,
  getIds,
  (entities, ids) => ids.map(id => entities[id])
);