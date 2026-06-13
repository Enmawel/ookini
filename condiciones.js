// datos de la condición
const cupoCata = 8;
const inscritos = 8;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el número de inscritos, devuelve "Hay cupos, abrir"
// si no vuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
 console.log("Hay cupos, abrir reserva");
} else {
  console.log("Cata llena, ofrecer lista de espera")
}

 // operadores de comparación
 8 > 5    // true
 3 < 10   // true
 8 >= 8   // true
 4 <= 9   // true
 5 === 5  // true
 5 !== 3  // true

   // revisa el código para predecir el resultado

   const tazasReservadasHoy = 47;
   const maxTazasDia = 50;

   if (tazasReservadasHoy >= maxTazasDia) {
    console.log("Cerrar reservas del dia");
   } else {
    console.log("Aún hay disponibiladad");
   }

   const tazasReservadas= 1
   if (tazasReservadas< 2){
    console.log("puede reservar una taza adicional")
   } else {
    console.log("Lo siento, has alcanzado la cantidad máxima de reservas.")
   }