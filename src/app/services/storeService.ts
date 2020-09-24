import { Task } from "../models/task";

export class StoreService {
  private toDoList: Task[];
  constructor() { }

  save(task: Task): string {
    try {
      this.toDoList.push(task);
      return 'Task successfully created';
    } catch (error) {
      return error;
    }
  }

  update(task: Task): string {
    try {
      task.toggle();
      return 'Task successfully updated';
    } catch (error) {
      return error;
    }
  }

  delete(task: Task): string {
    try {
      const index = this.toDoList.indexOf(task);
      if (index > -1) {
        this.toDoList.splice(index, 1);
      }
      return 'Task successfully removed';
    } catch (error) {
      return error;
    }
  }

  createId(): number {
    return this.toDoList.length;
  }

  getById(id: number): Task {
    return this.toDoList.find(x => x.id === id);
  }
}