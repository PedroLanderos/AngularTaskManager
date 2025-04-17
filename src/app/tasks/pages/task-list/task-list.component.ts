import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  //create the task object
  task: {name:string, status:string}[] = [];
  form: FormGroup;
  
  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({name:['', Validators.required], 
      status:['pendiente'],
    });
  }

  //function to add a task
  AddTask()
  {
    if(this.form.valid)
    {
      this.task.push(this.form.value);
      this.form.reset({status: 'pendiente'});
    }
  }

}
