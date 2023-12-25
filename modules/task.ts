export default class Task {
  constructor(
    private id: string,
    private description: string,
    private status: string
  ) {}

  public getId(): string {
    return this.id;
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
