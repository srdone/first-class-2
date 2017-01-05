import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromScouts from './scouts';

export interface State {
  scouts: fromScouts.State;
  router: fromRouter.RouterState;
}

const reducers = {
  scouts: fromScouts.reducer,
  router: fromRouter.routerReducer
}

const reducer: ActionReducer<State> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  return reducer(state, action);
}

export const getScoutsState = (state: State) => state.scouts;

export const getScoutIds = createSelector(getScoutsState, fromScouts.getIds);
export const getScoutEntities = createSelector(getScoutsState, fromScouts.getEntities);
export const getSelectedScoutId = createSelector(getScoutsState, fromScouts.getSelectedId);
export const getSelectedScout = createSelector(getScoutsState, fromScouts.getSelected);
export const getScout = (id: string) => createSelector(getScoutsState, fromScouts.getById(id));
export const getAllScouts = createSelector(getScoutsState, fromScouts.getAll);