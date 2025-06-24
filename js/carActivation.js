document.addEventListener("DOMContentLoaded", () => {
  // Elemente abrufen
  const brandInput = document.getElementById("brand");
  const modelInput = document.getElementById("model");
  const horsepowerInput = document.getElementById("horsepower");
  const fuelTypeSelect = document.getElementById("fuelType");
  const destinationInput = document.getElementById("destination");

  const createButton = document.querySelector("#car-form button") || document.getElementById("create-car");
  const controlButtons = document.querySelectorAll("#car-ui button");
  const statusBoxes = document.querySelectorAll(".auto-status-box > div");

  if (!createButton) return;

  createButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Eingaben holen und trimmen
    const brand = brandInput?.value.trim();
    const model = modelInput?.value.trim();
    const horsepowerStr = horsepowerInput?.value.trim();
    const horsepower = parseInt(horsepowerStr);
    const fuelType = fuelTypeSelect?.value;

    // Gültigkeit prüfen
    const isValid =
      brand && model && !isNaN(horsepower) &&
      horsepower >= 50 && horsepower <= 1000 &&
      fuelType;

    if (!isValid) {
      alert("Bitte füllen Sie alle Felder korrekt aus (PS zwischen 50 und 1000).");
      return;
    }

    // Steuerungsbuttons aktivieren
    controlButtons.forEach(btn => btn.removeAttribute("disabled"));
    destinationInput?.removeAttribute("disabled");

    // Statusfelder aktualisieren, falls vorhanden
    if (statusBoxes.length === 3) {
      statusBoxes[0].innerHTML = `
        <h4>Fahrzeug</h4>
        <p><strong>Marke:</strong> ${brand}</p>
        <p><strong>Modell:</strong> ${model}</p>
      `;

      statusBoxes[1].innerHTML = `
        <h4>Motor</h4>
        <p><strong>Leistung:</strong> ${horsepower} PS</p>
        <p><strong>Kraftstoff:</strong> ${fuelType}</p>
        <p>Status: <span style="color: red; font-weight: bold;">Aus</span></p>
      `;

      statusBoxes[2].innerHTML = `
        <h4>GPS Navigation</h4>
        <p>Ziel: <em>nicht gesetzt</em></p>
      `;
    } else {
      console.error("Status-Felder nicht korrekt gefunden.");
    }
  });
});



// document.addEventListener("DOMContentLoaded", () => {
//   // Eingabefelder aus dem Formular "Auto Konfiguration" holen
//   const brandInput = document.getElementById("brand");
//   const modelInput = document.getElementById("model");
//   const horsepowerInput = document.getElementById("horsepower");
//   const fuelTypeSelect = document.getElementById("fuelType");

//   // Der "Auto Erstellen"-Button
//   const createButton = document.querySelector("#car-form button");

//   // Alle Buttons im Bereich "Auto Steuerung"
//   const controlButtons = document.querySelectorAll("#car-ui button");

//   // Ziel-Eingabefeld
//   const destinationInput = document.getElementById("destination");

//   // Die Box mit ID "car-ui-box" (wird angezeigt wenn gültig)
//   const carUiBox = document.getElementById("car-ui-box");

//   // Klick-Event für den "Auto Erstellen"-Button
//   createButton.addEventListener("click", (e) => {
//     e.preventDefault(); // Verhindert das automatische Neuladen der Seite

//     // Eingabewerte auslesen
//     const brand = brandInput.value.trim();
//     const model = modelInput.value.trim();
//     const horsepower = parseInt(horsepowerInput.value);
//     const fuelType = fuelTypeSelect.value;

//     // Überprüfen, ob alle Felder gültig ausgefüllt sind
//     const isValid =
//       brand.length > 0 &&
//       model.length > 0 &&
//       !isNaN(horsepower) &&
//       horsepower >= 50 &&
//       horsepower <= 1000 &&
//       fuelType.length > 0;

//     // Wenn gültig: Steuerungs-UI aktivieren und anzeigen
//     if (isValid) {
//       controlButtons.forEach(btn => btn.removeAttribute("disabled"));
//       destinationInput.removeAttribute("disabled");

//       // Klassse "hidden" entfernen, falls vorhanden
//       carUiBox.classList.remove("hidden");
//     } else {
//       alert("Bitte füllen Sie alle Felder korrekt aus (PS zwischen 50 und 1000).");
//     }
//   });
// });
