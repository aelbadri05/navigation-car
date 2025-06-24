// engine.js
export class Engine {
  constructor(horsepower, fuelType) {
    this.horsepower = horsepower;
    this.fuelType = fuelType;
    this.isOn = false;
  }

  start() {
    if (!this.isOn) {
      this.isOn = true;
      return `Motor gestartet. (${this.horsepower} PS, ${this.fuelType})`;
    }
    return 'Motor ist bereits an.';
  }

  stop() {
    if (this.isOn) {
      this.isOn = false;
      return 'Motor gestoppt.';
    }
    return 'Motor ist bereits aus.';
  }

  getDetails() {
    return `${this.horsepower} PS (${this.fuelType})`;
  }
}
