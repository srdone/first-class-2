import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Scout } from '../models';
import { actionType } from '../util/action-type';

export const ActionTypes = {
  CREATE_SCOUT: actionType('[Scout] Add'),
  DELETE_SCOUT: actionType('[Scout] Remove'),
  UPDATE_SCOUT: actionType('[Scout] Update')
}

class CreateScoutAction implements Action {
  type = ActionTypes.CREATE_SCOUT;

  constructor(public payload: Scout) {}
}

class DeleteScoutAction implements Action {
  type = ActionTypes.DELETE_SCOUT;

  constructor(public payload: string) {}
}

class UpdateScoutAction implements Action {
  type = ActionTypes.UPDATE_SCOUT;

  constructor(public payload: Scout) {}
}

export type Actions = CreateScoutAction | DeleteScoutAction | UpdateScoutAction;

@Injectable()
export class ScoutActionCreator {

  createScout(payload: Scout) {
    return new CreateScoutAction(payload);
  }

  deleteScout(payload: string) {
    return new DeleteScoutAction(payload);
  }

  updateScout(payload: Scout) {
    return new UpdateScoutAction(payload);
  }

}