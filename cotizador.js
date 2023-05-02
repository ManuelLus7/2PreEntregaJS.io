console.log("Bienvenido al sistema");

let username = prompt("Ingrese su nombre de usuario:");
console.log(`Bienvenido!! ${username}! a Cwin Broker de Seguros:`);

const trimestral = 0.55;

const productos = {
  mantenimiento: {
    nombre: "Mantenimiento de Oferta",
    descripcion: "Este seguro garantiza el cumplimiento de la oferta de un producto o servicio, ofreciendo un respaldo económico al comprador en caso de incumplimiento por parte del vendedor.",
    minimo: 2000,
  },
  ejecucion: {
    nombre: "Ejecución de Contrato",
    descripcion: "Este seguro garantiza el cumplimiento de un contrato de obra o servicio, asegurando el pago de las penalizaciones y/o la finalización del trabajo en caso de incumplimiento por parte del contratista.",
    minimo: 2000,
  },
  anticipo: {
    nombre: "Anticipo Financiero",
    descripcion: "Este seguro garantiza la devolución del anticipo que un comprador le haya dado a un vendedor como pago adelantado por la realización de un trabajo o entrega de un bien, en caso de que el vendedor no cumpla con su compromiso.",
    minimo: 2000,
  },
  fondo: {
    nombre: "Fondo de Reparo",
    descripcion: "Este seguro garantiza la reparación de los daños ocasionados por el contratista durante la ejecución de un trabajo o servicio.",
    minimo: 2000,
  },
};

function mostrarMenu() {
  return `¿Qué Seguro de Caución desea Cotizar?
    ${Object.values(productos)
      .map((p, i) => `${i + 1}-${p.nombre}`)
      .join("\n")}
    ${Object.values(productos).length + 1}-Salir`;
}

function calcularPrima(sumaAsegurada, trimestral) {
  return Math.max(2000, Math.round((sumaAsegurada * trimestral) / 100));
}

function mostrarCotizacion(poliza, sumaAsegurada, prima) {
  const valorFormateado = new Intl.NumberFormat("es-AR").format(prima);
  const mensaje = `Su Tasa Anual Actual es de: ${trimestral*4}%\n Detalle de Su Cotización:\n- Tipo de Póliza: ${poliza.nombre}\n- Descripción de la Poliza: ${poliza.descripcion}\n- Suma Asegurada: $ ${sumaAsegurada}\n- Su PRIMA de Seguro: $ ${valorFormateado}\n- La Facturación es TRIMESTRAL + Impuestos (IVA e IIBB según corresponda)`;
  alert(mensaje);
}

function obtenerCotizacion() {
  const opcion = parseInt(prompt(`Bienvenido!! ${username} a Cwin Broker de Seguros:, seleccione una opción:\n${mostrarMenu()}`));
  if (opcion === Object.values(productos).length + 1) {
    alert("¡Gracias por Utilizar Nuestro Simulador de Seguros de Caución! \n Curso: JavaScript \n Comisión: 39510 \n Alumno: Manuel Lus");
    return;
  }

  const poliza = Object.values(productos)[opcion - 1];
  const sumaAsegurada = parseInt(prompt("Ingrese el Importe de la Suma Asegurada que necesita"));
  const prima = calcularPrima(sumaAsegurada, trimestral);

  mostrarCotizacion(poliza, sumaAsegurada, prima);
  return obtenerCotizacion();
}

obtenerCotizacion();
