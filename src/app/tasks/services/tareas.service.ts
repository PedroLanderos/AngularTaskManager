import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Tarea{
  name:string
  status:string
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Tarea[] = [];
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);

  GetTareas() : Observable<Tarea[]>
  {
    return this.tareasSubject.asObservable();
  }

  AgregarTarea(tarea:Tarea)
  {
    this.tareas.push(tarea);
    this.tareasSubject.next(this.tareas);
  }

  constructor() { }
}
