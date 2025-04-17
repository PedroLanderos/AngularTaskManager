import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/pages/task-list/task-list.component';

export const routes: Routes = [
    {path: '', redirectTo:'tasks', pathMatch:'full'},
    {path:'tasks', component: TaskListComponent},
];
