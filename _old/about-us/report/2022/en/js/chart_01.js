Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "Expenditure Cost Ratio Graph 2022",
  },
  subtitle: {
    text: "",
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
    point: {
      valueSuffix: "%",
    },
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.name}: {point.y:.1f}%",
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "Donation Utilization",
      colorByPoint: true,
      data: [
        {
          name: "EDUCATION & SCHOLARSHIPS",
          y: 36.88,
        },
        {
          name: "MANAGEMENT & DOCUMENTATION",
          y: 32.18,
        },
        {
          name: "NGO STAFFS ALLOWANCE",
          y: 16.6,
        },
        {
          name: "SCHOOL CONSTRUCTION",
          y: 12.23,
        },
        {
          name: "DONATED GOODS & ITEMS",
          y: 2.11,
        },
      ],
    },
  ],
});
