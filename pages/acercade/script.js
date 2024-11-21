document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const cvContent = document.getElementById("cvContent");

  readMoreBtn.addEventListener("click", () => {
    if (cvContent.classList.contains("caja_elipsis")) {
      // Cambiar a vista completa
      cvContent.classList.remove("caja_elipsis");
      cvContent.classList.add("caja_normal");
      readMoreBtn.textContent = "Leer menos";
    } else {
      // Cambiar a vista abreviada
      cvContent.classList.remove("caja_normal");
      cvContent.classList.add("caja_elipsis");
      readMoreBtn.textContent = "Leer más";
    }
  });
});