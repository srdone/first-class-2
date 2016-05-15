import {Reducer, Action} from '@ngrx/store';
import {IParticipant} from '../interfaces';

export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT';
export const DELETE_PARTICIPANT = 'DELETE_PARTICIPANT';

export const ParticipantsReducer:Reducer<IParticipant[]> = function (state = [], action) {
  
  switch (action.type) {
    case ADD_PARTICIPANT:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_PARTICIPANT:
      return state.map((participant) => {
        if (participant.id === action.payload.id) {
          return Object.assign({}, action.payload);
        }
        return participant;
      });
    case DELETE_PARTICIPANT:
      return state.filter((participant) => participant.id !== action.payload.id);
  
    default:
      break;
  }
  
}