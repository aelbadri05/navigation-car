// main.js – Zentrale Steuerung für NavigationCar Projekt
import NavigationCar from './navigationCar.js';

let navCar = null; // Globale Referenz auf das aktuelle Fahrzeug

document.addEventListener('DOMContentLoaded', () => {
  // Referenzen zu den Steuerungselementen
  const createBtn = document.getElementById('create-car');
  const startBtn = document.getElementById('startCar');
  const stopBtn = document.getElementById('stopCar');
  const destinationInput = document.getElementById('destination');
  const planBtn = document.getElementById('planRoute');
  const statusBtn = document.getElementById('showStatus');
  const cancelBtn = document.getElementById('cancelNav');
  const carUiBox = document.getElementById('car-ui-box');

  // Indikatoren (Kreise) für Motorstatus
  //const startIndicator = document.getElementById("start"); // grün
  // const stopIndicator = document.getElementById("stop");   // rot

  // Auto erstellen
  createBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const brand = document.getElementById('brand').value.trim();
    const model = document.getElementById('model').value.trim();
    const horsepower = parseInt(document.getElementById('horsepower').value);
    const fuelType = document.getElementById('fuelType').value;

    if (
      !brand ||
      !model ||
      isNaN(horsepower) ||
      horsepower < 50 ||
      horsepower > 1000
    ) {
      alert('Bitte füllen Sie alle Felder korrekt aus!');
      return;
    }

    navCar = new NavigationCar(brand, model, horsepower, fuelType);

    carUiBox.classList.remove('hidden');
    [
      startBtn,
      stopBtn,
      destinationInput,
      planBtn,
      statusBtn,
      cancelBtn,
    ].forEach((el) => el.removeAttribute('disabled'));
    // el.disabled = false);

    updateVehicleStatus(brand, model, horsepower, fuelType);
    showMotorIndicator(false); // initial auf „aus“
  });

  // Motor starten
  startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navCar) return;
    const message = navCar.startCar();
    updateMotorStatus(true);
    showMotorIndicator(true);
    logMessage(message);
  });

  // Motor stoppen
  stopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navCar) return;
    const message = navCar.stopCar();
    updateMotorStatus(false);
    showMotorIndicator(false);
    logMessage(message);
  });

  // Route planen
  planBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navCar) return;
    const destination = destinationInput.value.trim();
    if (!destination) {
      alert('Bitte geben Sie ein Ziel ein!');
      return;
    }
    const message = navCar.planRoute(destination);
    updateGPS(destination, true);
    logMessage(message);
  });

  // Navigation abbrechen
  cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navCar) return;
    const message = navCar.cancelNavigation();
    updateGPS('nicht gesetzt', false);
    logMessage(message);
  });

  // Status anzeigen
  statusBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!navCar) return;
    const message = navCar.getCarStatus();
    logMessage(message);
  });
});

// Hilfsfunktionen

// Protokollnachricht hinzufügen
function logMessage(message) {
  const log = document.getElementById('activity-log');
  const p = document.createElement('p');
  p.textContent = message;
  log.appendChild(p);
}

// Fahrzeuginformationen anzeigen
function updateVehicleStatus(brand, model, ps, fuel) {
  const boxes = document.querySelectorAll('.status');
  boxes[0].innerHTML = `
    <p><strong>Marke:</strong> ${brand}</p>
    <p><strong>Modell:</strong> ${model}</p>
  `;
  boxes[1].innerHTML = `
    <p><strong>Leistung:</strong> ${ps} PS</p>
    <p><strong>Kraftstoff:</strong> ${fuel}</p>
    <p>Status: <span style="color: red; font-weight: bold;">Aus</span></p>
  `;
  boxes[2].innerHTML = `
    <p>Ziel: <em>nicht gesetzt</em></p>
    <p>Status: <span style="color: gray;">Inaktiv</span></p>
  `;
}

// Motorstatus aktualisieren (An/Aus)
function updateMotorStatus(isOn) {
  const box = document.querySelector('.sts-mt');
  const span = box.querySelector('span');
  span.textContent = isOn ? 'An' : 'Aus';
  span.style.color = isOn ? 'green' : 'red';
}

// GPS-Ziel und Navigationsstatus anzeigen
function updateGPS(destination, active) {
  const box = document.querySelector('.sts-nav');
  box.innerHTML = `
    <p>Ziel: <strong>${destination}</strong></p>
    <p>Status: <span style="color:${active ? 'green' : 'gray'};">${
    active ? 'Aktiv' : 'Inaktiv'
  }</span></p>
  `;
}

// 🔄 Indikator-Kreis aktualisieren (sichtbar/nicht sichtbar)
function showMotorIndicator(isOn) {
  const startIndicator = document.getElementById('start');
  const stopIndicator = document.getElementById('stop');

  if (isOn) {
    startIndicator.style.display = 'block';
    stopIndicator.style.display = 'none';
  } else {
    startIndicator.style.display = 'none';
    stopIndicator.style.display = 'block';
  }
}
