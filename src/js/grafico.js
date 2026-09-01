const reservas = [18, 25, 21, 32, 28, 40, 35];

const options = {

  series: [
    {
      name: "Reservas",
      color: "#d4af37",
      data: reservas
    }
  ],

  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false
    }
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 4
    }
  },

  dataLabels: {
    enabled: false
  },

  xaxis: {
    categories: [
      "Lun",
      "Mar",
      "Mié",
      "Jue",
      "Vie",
      "Sáb",
      "Dom"
    ],
    labels: {
      style: {
        colors: "#9ca3af"
      }
    }
  },

  yaxis: {
    labels: {
      style: {
        colors: "#9ca3af"
      }
    }
  },

  grid: {
    borderColor: "#374151"
  },

  tooltip: {
    theme: "dark"
  }
};

if (document.querySelector("#column-chart")) {
  const chart = new ApexCharts(
    document.querySelector("#column-chart"),
    options
  );

  chart.render();
}

const precios = [
  6.50, 3.00, 4.20, 4.50,
  8.20, 4.20, 8.20, 5.40,
  3.50, 2.00, 3.00, 4.50,
  2.00, 2.20, 3.50, 3.50
];

// Calcular total de reservas
const totalReservas = reservas.reduce(
  (total, cantidad) => total + cantidad,
  0
);

const sumaPrecios = precios.reduce(
  (total, precio) => total + precio,
  0
);

const precioPromedio = sumaPrecios / precios.length;

const ingresoEstimado = totalReservas * precioPromedio;

const metaSemanal = 750;

const metaSuperada = ingresoEstimado > metaSemanal;

const elementoReservas = document.querySelector("#total-reservas");
const elementoPrecio = document.querySelector("#precio-promedio");
const elementoIngreso = document.querySelector("#ingreso-estimado");
const elementoResultado = document.querySelector("#resultado-meta");

if (elementoReservas) {
  elementoReservas.textContent = totalReservas;
}

if (elementoPrecio) {
  elementoPrecio.textContent = `$${precioPromedio.toFixed(2)}`;
}

if (elementoIngreso) {
  elementoIngreso.textContent = `$${ingresoEstimado.toFixed(2)}`;
}

if (elementoResultado) {
  if (metaSuperada) {
    elementoResultado.textContent =
      "Meta Superada: Se obtuvieron los resultados esperados.";
    elementoResultado
  } else {
    elementoResultado.textContent =
      "No se alcanzo la meta semanal";
    elementoResultado
  }
}


