import { Rank } from './rank';
import { Entity } from './entity';

export interface Scout extends Entity {
  id: string;
  name: {
    first: String,
    last: String
  },
  rank?: Rank
}