export interface ITask {
  id: number,
  title: string,
  isDone: boolean,
  toggle(): void,
}