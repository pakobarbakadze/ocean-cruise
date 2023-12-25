import { CrewMemberType } from "../enums";
import Task from "./task";

export default class CrewMember {
  constructor(
    private name: string,
    private type: CrewMemberType,
    private tasks: Task[]
  ) {}

  public setTask(task: Task): void {
    this.tasks.push(task);
  }

  public getTask(id: string): Task | undefined {
    return this.tasks.find((task) => task.getId() === id);
  }

  public changeTaskStatus(id: string, status: string): void {
    const task = this.getTask(id);

    if (!task) return;

    task.setStatus(status);
  }
}
