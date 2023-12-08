import { CrewMemberType, Task } from "./interfaces";

export default class CrewMember {
  constructor(
    private name: string,
    private type: CrewMemberType,
    private tasks: Task[]
  ) {}

  public setTask(task: Task): void {
    this.tasks.push(task);
  }
}
