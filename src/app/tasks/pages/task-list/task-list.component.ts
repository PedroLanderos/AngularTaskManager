import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tareas =[{ titulo: 'Aprender Angular Standalone', estado: 'pendiente' },
    { titulo: 'Hacer la lista de tareas', estado: 'en progreso' },
    { titulo: 'Subir a GitHub', estado: 'completada' },]
}
