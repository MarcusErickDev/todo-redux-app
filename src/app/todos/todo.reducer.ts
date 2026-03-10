import { Action, createReducer, on } from '@ngrx/store';
import { crear, editar, toggle, borrar, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save world'),
  new Todo('Save earth'),
  new Todo('Save planet'),
];

export const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo( texto )]),
  on( borrar, (state, {id}) => state.filter( todo => todo.id !== id )),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, {completado}) => {
    return state.map( todo => {
      // if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      // } else {
      //   return todo;
      // }
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer (state: Todo[] | undefined, action: Action){
  return _todoReducer(state,action);
}
