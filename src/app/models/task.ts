import { ITask } from "../interfaces/itask";

export class Task implements ITask {
  id: number;
  title: string;
  isDone: boolean;
  toggle(): void {
    this.isDone = !this.isDone;
  }

  constructor(id: number, title: string, isDone: boolean = true) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }
}
