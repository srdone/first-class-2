import {Reducer, Action} from '@ngrx/store';
import {IParticipant} from '../interfaces';
import {generateUUID} from '../utilities/index';

export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT';
export const DELETE_PARTICIPANT = 'DELETE_PARTICIPANT';

export function addParticipant(participant: IParticipant) : Action {
  participant.id = generateUUID();
  
  return {
    type: ADD_PARTICIPANT,
    payload: participant
  }
}

export function updateParticipant(participant:IParticipant) : Action {
  return {
    type: UPDATE_PARTICIPANT,
    payload: participant
  }
}

export function deleteParticipant(participant:IParticipant) : Action {
  return {
    type: DELETE_PARTICIPANT,
    payload: participant
  }
}

export const participants:Reducer<IParticipant[]> = function (state = [], {type, payload}) {
  
  switch (type) {
    case ADD_PARTICIPANT:
      return [
        ...state,
        Object.assign({}, payload)
      ];
    case UPDATE_PARTICIPANT:
      return state.map((participant) => {
        if (participant.id === payload.id) {
          return Object.assign({}, payload);
        }
        return participant;
      });
    case DELETE_PARTICIPANT:
      return state.filter((participant) => participant.id !== payload.id);
  
    default:
      return state;
  }
  
}