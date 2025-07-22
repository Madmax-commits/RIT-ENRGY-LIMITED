const lastUpdated = new Date(document.lastModified);
document.getElementById("last-updated").textContent =
  `Last updated: ${lastUpdated.toLocaleString()}`;

 function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

