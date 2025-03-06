Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "団体運営費 支出割合グラフ 2021",
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
          y: 35.5,
        },
        {
          name: "支援物資船舶輸送関連費",
          y: 23.44,
        },
        {
          name: "NGO運営関連費",
          y: 20.79,
        },
        {
          name: "NGOスタッフ関連費",
          y: 10.86,
        },
        {
          name: "学校建設 & 土地関連費用",
          y: 9.38,
        },
      ],
    },
  ],
});
