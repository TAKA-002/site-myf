Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "活動費用支出比率グラフ2022",
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
      name: "支出比率",
      colorByPoint: true,
      data: [
        {
          name: "学校教育支援",
          y: 36.88,
        },
        {
          name: "NGO運営諸経費",
          y: 32.18,
        },
        {
          name: "活動費用",
          y: 16.6,
        },
        {
          name: "学校建設支援",
          y: 12.23,
        },
        {
          name: "支援物資対応",
          y: 2.11,
        },
      ],
    },
  ],
});
