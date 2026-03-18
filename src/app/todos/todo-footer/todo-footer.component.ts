import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiar } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;
  completados: any;

  constructor( private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;

      this.completados = state.todos.filter( todos=> todos.completado);

      this.pendientes = state.todos.filter( todos=> !todos.completado).length;
    })
  }

  limpiarTodos(){
    this.store.dispatch(limpiar())
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro:filtro}));
  }

}
