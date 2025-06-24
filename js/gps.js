// gps.js
export class GPS {
  constructor() {
    this.currentLocation = 'Unbekannt';
    this.destination = '';
    this.isNavigating = false;
  }

  setDestination(newDestination) {
    this.destination = newDestination;
    return `Gesetzte Ziel: ${this.destination}`;
  }

  startNavigation() {
    this.isNavigating = true;
    return 'Navigation gestartet.';
  }

  stopNavigation() {
    this.isNavigating = false;
    return 'Navigation beendet.';
  }

  getCurrentRouteInfo() {
    return `${this.destination} – ${this.isNavigating ? 'Aktiv' : 'Inaktiv'}`;
  }
}
