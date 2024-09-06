import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({
        id: Date.now(),
        task: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    }
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
