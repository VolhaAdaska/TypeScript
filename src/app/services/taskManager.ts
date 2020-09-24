import { StoreService } from "./storeService";
import { Task } from "../models/task";

export class TaskManager {
  constructor(private storeService: StoreService){
  }

  createTask(title: string): string {
    const task = new Task(this.storeService.createId(), title);
    return this.storeService.save(task);
  }

  deleteTask(id: number): string {
    const task = this.storeService.getById(id);
    return this.storeService.delete(task);
  }

  toggleTask(id: number): string {
    const task = this.storeService.getById(id);
    return this.storeService.update(task);
  }
}