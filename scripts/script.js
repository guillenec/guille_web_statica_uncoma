document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los campos del formulario
  const inputs = document.querySelectorAll(".formContact input, .formContact select");
  const tableRows = document.querySelectorAll(".cuerpo_tabla tr");

  // Mapeamos los campos con los nombres de los inputs
  const fieldMap = {
    nombre: 0,
    apellido: 1,
    email: 2,
    telefono: 3,
    edad: 4,
    direccion: 5,
    provincia: 6,
    cp: 7,
    selectradio: 8, // Radio buttons
    suscripcion: 9, // Checkboxes
  };

  // Función para actualizar la tabla
  function updateTable(field, value) {
    const rowIndex = fieldMap[field];
    if (rowIndex !== undefined) {
      tableRows[rowIndex].children[1].textContent = value;
    }
  }

  // Evento para cada campo
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      const field = event.target.name;
      let value = "";

      if (event.target.type === "radio") {
        // Radio buttons
        if (event.target.checked) {
          value = document.querySelector(`label[for="${event.target.id}"]`).textContent;
        }
      } else if (event.target.type === "checkbox") {
        // Checkboxes
        const checkedBoxes = document.querySelectorAll('input[name="suscripcion"]:checked');
        value = Array.from(checkedBoxes)
          .map((box) => document.querySelector(`label[for="${box.id}"]`).textContent)
          .join(", ");
      } else {
        // Otros tipos de input
        value = event.target.value;
      }

      // Actualizamos la tabla
      updateTable(field, value);
    });
  });
});