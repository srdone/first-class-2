import { Rank } from './rank';

export interface Scout {
  id: string;
  name: {
    first: String,
    last: String
  },
  rank?: Rank
}