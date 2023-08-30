// tasks.component.ts

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }

  createTask() {
    if (this.newTaskTitle.trim() === '') {
      return;
    }

    this.taskService
      .createTask(this.newTaskTitle)
      .subscribe((createdTask: any) => {
        this.tasks.push(createdTask);
        this.newTaskTitle = ''; // Clear input field
      });
  }
}
