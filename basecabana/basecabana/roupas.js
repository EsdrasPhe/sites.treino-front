document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".catalogo-page");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function updateCatalog() {
    pages.forEach((page, index) => {
      page.classList.toggle("active", index === currentIndex);
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  document.querySelector(".nav-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    updateCatalog();
  });

  document.querySelector(".nav-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % pages.length;
    updateCatalog();
  });

  // Inicializa com a primeira aba ativa
  updateCatalog();
});
