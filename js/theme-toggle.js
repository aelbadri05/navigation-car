document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darktheme");

  // Prüfen, ob der Benutzer zuvor Dunkelmodus aktiviert hat
  if (localStorage.getItem("darkmode") === "enabled") {
    document.body.classList.add("darktheme");
  }

  // Klick-Event zum Umschalten des Darkmodes
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
      localStorage.setItem("darkmode", "enabled");
    } else {
      localStorage.setItem("darkmode", "disabled");
    }
  });
});
