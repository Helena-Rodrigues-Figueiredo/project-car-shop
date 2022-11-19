import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const findCars = await carODM.findAll();
    const allCars = findCars.map((car) => this.createCarDomain(car));
    return allCars;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const findCar = await carODM.findById(id);
    return this.createCarDomain(findCar);
  }
}