// navigationCar.js
import { Engine } from './engine.js';
import { GPS } from './gps.js';

export default class NavigationCar {
  constructor(brand, model, horsepower, fuelType) {
    this.brand = brand;
    this.model = model;
    this.engine = new Engine(horsepower, fuelType);
    this.gps = new GPS();
  }

  startCar() {
    return this.engine.start();
  }

  stopCar() {
    return this.engine.stop();
  }

  planRoute(destination) {
    const des = this.gps.setDestination(destination);
    const nav = this.gps.startNavigation();
    return `${des}\n${nav}`;
  }

  cancelNavigation() {
    return this.gps.stopNavigation();
  }

  getCarStatus() {
    return `Marke: ${this.brand} ${this.model}
Motorstatus: ${this.engine.getDetails()}
GPS-Status: ${this.gps.getCurrentRouteInfo()}`;
  }
}
