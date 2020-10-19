export class Task {
  public get isDone(): boolean {
    return this._isDone
  }

  public get title(): string {
    return  this._title;
  }

  public get id(): number {
    return  this._id;
  }

  constructor(
    private _id: number, 
    private _title: string, 
    private _isDone: boolean = false) {
  }

  public toggle(): void {
    this._isDone = !this._isDone;
  }
}

export class RenderService {
  constructor() {
  }

  display(task: Task): void {
    console.log(task.title);
  }

}

export class Store {
  private toDoList: Task[] = new Array<Task>();
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

  getAll(): Task[] {
    return this.toDoList;
  }
}

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

  getAll(): Task[] {
    return this.store.getAll();
  }
}

export class ToDo {
  constructor(private taskManager: TaskManager,
    private renderService: RenderService){
  }

  addTask(title: string): Task {
    const task = this.taskManager.createTask(title);
    this.renderService.display(task);
    return task;
  }

  deleteTask(id: number): Task {
    const task = this.taskManager.deleteTask(id);
    this.renderService.display(task);
    return task;
  }

  toggleTask(id: number): Task {
   const task = this.taskManager.toggleTask(id);
   this.renderService.display(task);
   return task;
  }

  getAllTask(): Task[] {
   return this.taskManager.getAll();
  }
}

const todo = new ToDo(new TaskManager(new Store()), new RenderService());
const result = todo.addTask('task 1');
todo.addTask('task 2');
console.log(result)
console.log(todo.toggleTask(result.id));
console.log(todo.toggleTask(result.id));
console.log(todo.deleteTask(result.id));
console.log(todo.getAllTask());



