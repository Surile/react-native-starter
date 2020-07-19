import {INCREMENT_COUNT, DECREMENT_COUNT} from './types';

export const incrementCount = (counter: number) => {
  return {
    type: INCREMENT_COUNT,
    payload: counter,
  };
};

export const decrementCount = (counter: number) => {
  return {
    type: DECREMENT_COUNT,
    payload: counter,
  };
};
