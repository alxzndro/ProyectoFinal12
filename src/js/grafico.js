const options = {
  series: [
    {
      name: "Reservas",
      color: "#d4af37",
      data: [18, 25, 21, 32, 28, 40, 35]
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