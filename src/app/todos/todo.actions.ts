import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] crea todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] toogle todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] toogleAll todo',
  props<{ completado: boolean }>()
);

export const editar = createAction(
  '[TODO] editar todo',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[TODO] borrar todo',
  props<{ id: number }>()
);
