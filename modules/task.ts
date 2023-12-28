export default class Task {
  constructor(
    private id: string,
    private memberId: string,
    private description: string,
    private status: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getMemberId(): string {
    return this.memberId;
  }

  public getDescription(): string {
    return this.description;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }
}
