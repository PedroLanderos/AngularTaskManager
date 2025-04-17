import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  constructor(private tareasService : TareasService) { 
  }
  
  tasks: {name:string, status:string}[] = [];

  ngOnInit(): void {
    this.tareasService.GetTareas().subscribe((data)=>{
      this.tasks = data; 
    })
  }

  HandleTasks(task: {name:string, status:string})
  {
    this.tareasService.AgregarTarea(task);
  }

}
