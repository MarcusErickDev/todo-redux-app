import { Action, createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save world'),
  new Todo('Save earth'),
  new Todo('Save planet'),
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo( texto )]),
);

export function todoReducer (state: Todo[] | undefined, action: Action){
  return _todoReducer(state,action);
}
