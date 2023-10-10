  class Validation {
    constructor() {
      this.Fin = "";
      this.digitA = /[aA]/;
      this.digitB = /[bB]/;
      this.general = /[aAbB]/;
      this.arrayStates = [];
    }

    regularExpressions(character) {
      // Comparamos si es dígito o operador
      if (this.digitA.test(character)) {
        // Caracter a
        return 0;
      } else if (this.digitB.test(character)) {
        // Caracter b
        return 1;
      } else if (character === this.Fin) {
        // Caracter ""
        return 2;
      } else {
        // Cualquier otro caracter
        return 3;
      }
    }

    validate(expression) {
      if (this.general.test(expression)) {
        // Tabla de transiciones
        const table = [
          [1, "E"],
          ["E", 2],
          [4, 3],
          [4, "E"],
          ["E", 5],
          [7, 6],
          [7, "E"],
          ["E", 8],
          [10, 9],
          [10, "E"],
          ["E", 11],
          [13, 12],
          [13, "E"],
        ];

        let state = 0;
        this.arrayStates.push(state);

        // Ciclo para recorrer la cadena
        for (const character of expression) {
          // Llamamos al método para saber si es un carácter válido y el valor retornado se guarda en charcaracter
          const charcaracter = this.regularExpressions(character);
          // Guardamos en estado el valor obtenido en la tabla según las coordenadas que recibió anteriormente
          if (charcaracter === 3) {
            return -1;
          }
          state = table[state][charcaracter];
          if (state === "E") {
            break;
          }
          this.arrayStates.push(state);
        }

        if (
          state === 1 ||
          state === 4 ||
          state === 7 ||
          state === 10 ||
          state === 13
        ) {
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    }
  }


  