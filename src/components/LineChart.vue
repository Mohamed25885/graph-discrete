<template>
  <canvas id="lineChart"></canvas>
  <!-- <button class="btn btn-primary" @click="graph.resetZoom()"></button> -->
</template>

<script>
import Chart from "chart.js/auto";
//import zoomPlugin from "chartjs-plugin-zoom";

import LineChartData from "../assets/lineChart.js";

export default {
  name: "LineChart",
  data() {
    return {
      LineChartData: LineChartData,
      graph: null,
    };
  },
  methods: {
    calcAngles() {
      const dc = this.$store.getters?.getDc ?? 0;
      const sine = this.$store.getters?.getSine ?? [];
      const cosine = this.$store.getters?.getCosine ?? [];
      const length = Math.min(cosine.length, sine.length);
      const data = {
        labels: [],
        data: [],
      };
      for (let index = -360; index < 361; index++) {
        data.labels.push(index);
        let currentAngle = (index * Math.PI) / 180;
        let sineAngle = 0;
        let cosineAngle = 0;
        for (let j = 0; j < length; j++) {
          const sin = sine[j];
          const cosine = sine[j];
          cosineAngle += cosine * Math.cos(index * currentAngle);
          sineAngle += sin * Math.sin(index * currentAngle);
        }
        let angle = dc + cosineAngle + sineAngle;
        data.data.push(angle);
      }
      return data;
    },
  },
  mounted() {
    //Chart.register(zoomPlugin);

    const ctx = document.getElementById("lineChart");
    const values = this.calcAngles();
    this.LineChartData.data.labels = values.labels;
    this.LineChartData.data.datasets[0].data = values.data;

    this.graph = new Chart(ctx, this.LineChartData);
  },
};
</script>
