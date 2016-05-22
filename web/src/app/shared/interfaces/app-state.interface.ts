import {IParticipant} from '../interfaces';

export interface IAppState {
  participants: IParticipant[],
  selectedParticipant: IParticipant
}