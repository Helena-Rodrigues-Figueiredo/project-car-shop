import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(carObj: ICar) {
    this.id = carObj.id;
    this.model = carObj.model;
    this.year = carObj.year;
    this.color = carObj.color;
    this.status = carObj.status || false;
    this.buyValue = carObj.buyValue;
    this.doorsQty = carObj.doorsQty;
    this.seatsQty = carObj.seatsQty;
  }
  
  public setId(id: string) {
    this.id = id;
  }
  
  public getId() {
    return this.id;
  }
  
  public setModel(model: string) {
    this.model = model;
  }
  
  public getModel() {
    return this.model;
  }
  
  public setYear(year: number) {
    this.year = year;
  }
  
  public getYear() {
    return this.year;
  }
  
  public setColor(color: string) {
    this.color = color;
  }
  
  public getColor() {
    return this.color;
  }
  
  public setStatus(status: boolean) {
    this.status = status;
  }
  
  public getStatus() {
    return this.status;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}
