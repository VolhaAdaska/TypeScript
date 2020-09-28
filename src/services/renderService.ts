import { Task } from "../models/task";

export class RenderService {
  constructor() {
  }

  display(task: Task): void {
    console.log(task.title);
  }

}