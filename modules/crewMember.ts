import { CrewMemberType } from "../enums";

export default class CrewMember {
  constructor(
    private id: string,
    private name: string,
    private type: CrewMemberType
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string): void {
    this.name = newName;
  }

  public getType(): CrewMemberType {
    return this.type;
  }

  public setType(newType: CrewMemberType): void {
    this.type = newType;
  }
}
