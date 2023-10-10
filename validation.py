import re
class Validation:

    def __init__(self):
        self.Fin = ""
        self.digitA = "[a|A]"
        self.digitB = "[b|B]"
        self.general = "[a|A|B|b]"
        self.arrayStates = []

    def regularExpressions(self, character):

        # comparamos si es digito o operador
        if re.match(self.digitA, character):
            # caracter a
            return 0
        elif re.match(self.digitB, character):
            # caracter b"
            return 1
        elif character == self.Fin:
            # caracter ""
            return 2
        else:
            # cualquier otro caracter
            return 3

    def validate(self, expression):

        if re.match(self.general, expression):
            # tabla de trancisiones

            table = [[1, "E"], ["E", 2], [4, 3], [4, "E"], ["E", 5], [7, 6], [7, "E"], ["E", 8], [10, 9],[10,"E"], ["E",11],[13,12],[13,"E"]]
            state = 0
            self.arrayStates.append(state)
            # ciclo para recorrer la cadena
            for character in expression:

                # llamamos al metodo para saber si es un caracter valido y el valor retornado se guarda en charcaracter
                charcaracter = self.regularExpressions(character)
                # guardamos en estado el valor obtenido en la tabla segun las cordenadas que recibio anteriormente
                if  charcaracter==3:
                 return -1
                state = table[state][charcaracter]
                if (state == "E"):
                    break
                self.arrayStates.append(state)
            if state == 1 or state == 4 or state == 7 or state == 10 or state == 13:
                return  0
            else:
               return -1
        else:
            return -1


validar= Validation()
respuesta= validar.validate("abbabbaa")
if respuesta==-1:
    print("Palabra rechazada")
    print(validar.arrayStates)
else:
    print("Palabra aceptada")  
    print(validar.arrayStates)  
    