import { Action } from '@ngrx/store';
import { Scout } from '../models';
import { type } from '../util';

export const ActionTypes = {
  CREATE_SCOUT: type('[Scout] Add'),
  DELETE_SCOUT: type('[Scout] Remove'),
  UPDATE_SCOUT: type('[Scout] Update')
}

export class CreateScoutAction implements Action {
  type = ActionTypes.CREATE_SCOUT;

  constructor(public payload: Scout) {}
}

export class DeleteScoutAction implements Action {
  type = ActionTypes.DELETE_SCOUT;

  constructor(public payload: string) {}
}

export class UpdateScoutAction implements Action {
  type = ActionTypes.UPDATE_SCOUT;

  constructor(public payload: Scout) {}
}

export type Actions = CreateScoutAction | DeleteScoutAction | UpdateScoutAction;