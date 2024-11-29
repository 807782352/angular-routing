import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>(); // 这里有withComponentInputBinding和 path-parameter绑定

  private userService = inject(UsersService); // DI 初始化

  userName = computed(
    () => this.userService.users.find((user) => user.id === this.userId())?.name
  );
}
