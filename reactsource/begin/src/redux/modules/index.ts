import { combineReducers } from '@reduxjs/toolkit';
import { counter } from './counter';
import { todos } from './todo';

const rootReducer = combineReducers({
  counter,
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
