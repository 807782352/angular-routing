import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent }, // <your-domain>/

  // { path: 'tasks', component: TasksComponent }, // <your-domain>/tasks

  {path: 'users/:userId', component: UserTasksComponent}   
];
