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
