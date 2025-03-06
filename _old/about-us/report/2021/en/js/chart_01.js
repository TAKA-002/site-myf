Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "Group Operating Expense Expenditure Ratio Graph 2021",
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
          y: 35.5,
        },
        {
          name: "CONTAINER SHIPMENT",
          y: 23.44,
        },
        {
          name: "NGO MANAGEMENT & DOCUMENTATION",
          y: 20.79,
        },
        {
          name: "NGO STAFFS ALLOWANCE",
          y: 10.86,
        },
        {
          name: "SCHOOL CONSTRUCTION & LAND LEASE",
          y: 9.38,
        },
      ],
    },
  ],
});
