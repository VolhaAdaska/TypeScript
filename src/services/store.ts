import { Task } from "../models/task";

export class Store {
  private toDoList: Task[];
  constructor() { }

  save(task: Task): Task {
    this.toDoList.push(task);
    return task;
  }

  update(task: Task): Task {
    task.toggle();
    return task;
  }

  delete(task: Task): Task {
    const index = this.toDoList.indexOf(task);
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
    return task;
  }

  getById(id: number): Task {
    return this.toDoList.find(x => x.id === id);
  }
}