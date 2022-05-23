export const LineChartData = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "OUTPUT",
        data: [],
        backgroundColor: "rgba(54,73,93,.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 3,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: "Output",
      },

      zoom: {
        pan: {
          overScaleMode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },

          mode: "x",
          drag: {
            enabled: true,
          },
        },
      },
    },
  },
};

export default LineChartData;
