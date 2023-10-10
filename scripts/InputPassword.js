document
  .getElementById("validateButton")
  .addEventListener("click", function () {
    const inputWord = document.getElementById("inputWord").value;
    const validar = new Validation();
    const respuesta = validar.validate(inputWord);

    const resultDiv = document.getElementById("resultDiv");

    if (respuesta === -1) {
      resultDiv.textContent = "Palabra rechazada";
      resultDiv.className = "bg-rechazado";
    } else {
      resultDiv.textContent = "Palabra aceptada";
      resultDiv.className = "bg-aceptado";
    }
    if (resultDiv.textContent == "Palabra aceptada") {
      const acceptedWordsTextarea = document.getElementById("acceptedWords");
      acceptedWordsTextarea.value += inputWord + "\n";
    }


    const estados = validar.arrayStates;
    function simularRecorrido(i) {
      if (i > estados.length) {
        return;
      }
    
      const estadoActual = estados[i];

      cy.nodes().style({ color: "white" });

      // Cambia el color del nodo correspondiente al estado actual a azul
      cy.$(`#q${estadoActual}`).style({ color: "blue" });

      setTimeout(function () {
        simularRecorrido(i + 1);
      }, 1000); // Cambia el tiempo de espera según tus preferencias
    }

    // Comienza la simulación desde el primer estado (estado 0)
    simularRecorrido(0);
  });

document.getElementById("inputWord").addEventListener("input", function () {
  const resultDiv = document.getElementById("resultDiv");
  resultDiv.textContent = ""; // Limpiar contenido
  resultDiv.className = ""; // Eliminar la clase de fondo
});