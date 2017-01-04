import { createSelector } from 'reselect';

import { addItem, removeItem, updateItem } from '../util';

import { Scout, CollectionState } from '../models';
import * as scout from '../actions/scout';

export interface State extends CollectionState {
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
      return addItem(action.payload, state);
    }
    
    case scout.ActionTypes.DELETE_SCOUT: {
      return removeItem(action.payload, state);
    }

    case scout.ActionTypes.UPDATE_SCOUT: {
      return updateItem(action.payload, state);
    }

    case scout.ActionTypes.SELECT_SCOUT: {
      return Object.assign({}, state, {selectedScoutId: action.payload});
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