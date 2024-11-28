// Variables globales
let turnos = [
    { hora: "14:00", estado: "disponible" },
    { hora: "16:00", estado: "disponible" },
    { hora: "18:00", estado: "disponible" },
    { hora: "20:00", estado: "disponible" },
  ];
  
  // Función para mostrar turnos disponibles 
  function mostrarTurnosEnAlert() {
    let disponibles = turnos.filter(turno => turno.estado === "disponible");
    
    if (disponibles.length === 0) {
      alert("No hay turnos disponibles.");
    } else {
      let mensaje = "Turnos disponibles:\n";
      disponibles.forEach((turno, index) => {
        mensaje += `${index + 1}. ${turno.hora}\n`;
      });
      alert(mensaje);
    }
  }
  
  // Función para reservar un turno
  function reservarTurno(hora) {
    let turno = turnos.find(turno => turno.hora === hora);
  
    if (turno && turno.estado === "disponible") {
      turno.estado = "reservado";
      alert(`✅ Turno de las ${hora} reservado con éxito.`);
    } else {
      alert("❌ Turno no disponible o ya reservado.");
    }
  }
  
  // Función para mostrar estadísticas
  function mostrarEstadisticas() {
    let totalTurnos = turnos.length;
    let reservados = turnos.filter(turno => turno.estado === "reservado").length;
    let porcentajeReservados = (reservados / totalTurnos) * 100;
  
    console.log(`Turnos reservados: ${reservados}`);
    console.log(`Porcentaje de ocupación: ${porcentajeReservados.toFixed(2)}%`);
  }
  
  // Función principal para interactuar con el usuario
  function iniciarSimulador() {
    let continuar = true;
  
    while (continuar) {
      let opcion = prompt(
        "Elige una opción:\n1. Ver turnos disponibles\n2. Reservar un turno\n3. Ver estadísticas\n4. Salir"
      );
  
      switch (opcion) {
        case "1":
          mostrarTurnosEnAlert(); // Ahora los turnos se muestran en un alert
          break;
  
        case "2":
          let hora = prompt("Ingresa el horario que deseas reservar (Ej: 16:00):");
          reservarTurno(hora);
          break;
  
        case "3":
          mostrarEstadisticas();
          break;
  
        case "4":
          continuar = false;
          alert("Gracias por usar el simulador. ¡Hasta pronto!");
          break;
  
        default:
          alert("Opción no válida. Inténtalo de nuevo.");
      }
    }
  }
  