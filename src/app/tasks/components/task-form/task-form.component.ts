import { CommonModule } from '@angular/common';
import { Component, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  form:FormGroup;

  //set the data
  @Output() onAddTask = new EventEmitter<{name:string; status:string}>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:['', Validators.required],
      status: ['pendiente']
    });
  }

  SubmitForm()
  {
    if(this.form.valid)
    {
      this.onAddTask.emit(this.form.value);
      this.form.reset({status:"pendiente"});
    }
  }
}
