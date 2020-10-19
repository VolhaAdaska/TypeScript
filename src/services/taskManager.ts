import { Store } from "./store";
import { Task } from "../models/task";

export class TaskManager {
  constructor(private store: Store){
  }

  createTask(title: string): Task {
    return this.store.save(new Task(this.createId(), title));
  }

  deleteTask(id: number): Task {
    return this.store.delete(this.store.getById(id));
  }

  toggleTask(id: number): Task {
    return this.store.update(this.store.getById(id));
  }

  createId(): number {
    return Math.random();
  }
}