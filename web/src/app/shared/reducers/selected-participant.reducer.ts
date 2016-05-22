import {Reducer, Action} from '@ngrx/store';
import {IParticipant} from '../interfaces';

export const SELECT_PARTICIPANT = 'SELECT_PARTICIPANT';

export function selectParticipant(participant: IParticipant): Action {
  return {
    type: SELECT_PARTICIPANT,
    payload: participant
  }
}

const defaultParticipant:IParticipant = {
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  level: undefined,
  unit: undefined
}

export const selectedParticipant:Reducer<IParticipant> = function (state = defaultParticipant, {type, payload}) {
  switch (type) {
    case SELECT_PARTICIPANT:
      return Object.assign({}, payload);
    default:
      return state;
  }
}