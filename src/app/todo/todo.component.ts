import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor() {}
  newTask: any = {};
  taskItems: any = [];
  editFlag: boolean = false;
  index: any;

  ngOnInit() {}

  addTask(task: Task) {
    console.log(task);
    if (!this.editFlag) {
      this.taskItems.push(task);
      console.log(this.taskItems);
      this.newTask = {};
    } else {
      console.log('editinggg');
      this.taskItems[this.index] = task;
      console.log(this.taskItems[this.index]);
      this.editFlag = false;
      this.newTask = {};
    }
  }

  reset() {
    this.newTask = {};
    this.editFlag = false;
  }

  edit(task: Task) {
    this.newTask.name = task.name;
    this.newTask.id = task.id;
    this.editFlag = true;
    this.index = this.taskItems.indexOf(task);
  }

  delete(task: Task) {
    console.log(this.taskItems.indexOf(task));
    this.taskItems.splice(this.taskItems.indexOf(task), 1);
  }
}
