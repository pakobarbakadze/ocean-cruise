export default class Location {
  private from: string;
  private to: string;
  private startDate: Date;
  private endDate: Date;

  constructor(from: string, to: string, startDate: Date, endDate: Date) {
    this.from = from;
    this.to = to;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public getFrom(): string {
    return this.from;
  }

  public setFrom(newFrom: string): void {
    this.from = newFrom;
  }

  public getTo(): string {
    return this.to;
  }

  public setTo(newTo: string): void {
    this.to = newTo;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setStartDate(newStartDate: Date): void {
    this.startDate = newStartDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public setEndDate(newEndDate: Date): void {
    this.endDate = newEndDate;
  }
}
