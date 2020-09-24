// - addTask(title)
// - deleteTask(id)
// - toggleTask(id)
// const todo = new TODO(new TaskManager(new Store()), new Render())
import { Task } from "../app/models/task";
import { TaskManager } from "./services/taskManager";
import { RenderService } from "./services/renderService";

export class ToDo {
  constructor(private taskManager: TaskManager,
    private renderService: RenderService){
  }

  addTask(title: string): void {
    const msg = this.taskManager.createTask(title);
    this.renderService.display(msg);
  }

  deleteTask(id: number): void {
    const msg = this.taskManager.deleteTask(id);
    this.renderService.display(msg);
  }

  toggleTask(id: number): void {
   const msg = this.taskManager.toggleTask(id);
   this.renderService.display(msg);
  }

}