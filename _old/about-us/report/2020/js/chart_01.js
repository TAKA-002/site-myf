Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "団体運営費 支出割合グラフ 2020",
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
      name: "ご寄付活用項目",
      colorByPoint: true,
      data: [
        {
          name: "学校教育関連 & 奨学金",
          y: 46.92,
        },
        {
          name: "NGO運営関連費",
          y: 23.62,
        },
        {
          name: "支援物資検品・輸送関連費",
          y: 15.81,
        },
        {
          name: "NGOスタッフ関連費",
          y: 7.24,
        },
        {
          name: "学校建設 & 土地関連費用",
          y: 6.38,
        },
      ],
    },
  ],
});
