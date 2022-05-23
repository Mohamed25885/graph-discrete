<template>
  <table class="table mb-4 table-bordered">
    <tbody>
      <tr>
        <th>Angle(deg)</th>
        <td v-for="(input, index) in inputs" :key="index">
          {{ input.angle }}
        </td>
      </tr>
      <tr>
        <th>Voltage(volts)</th>
        <td v-for="(input, index) in inputs" :key="index">
          {{ input.volts }}
        </td>
      </tr>
    </tbody>
  </table>
  <canvas id="graph_input" style="height: 100px"></canvas>
  <hr class="my-2 d-block" />
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "GraphTable",
  props: ["inputs"],
  data() {
    return {
      chartData: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "INPUT",
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
              text: "Input",
            },
          },
        },
      },
      storedInput: this.$store.getters?.getInputs ?? [],
    };
  },
  mounted() {
    //Chart.register(zoomPlugin);

    const angles = this.storedInput.map((item) => {
      return item.angle;
    });
    const volts = this.storedInput.map((item) => {
      return item.volts;
    });

    const elementLine = document.getElementById("graph_input");
    console.log(volts);
    console.log(angles);
    this.chartData.data.labels = angles;
    this.chartData.data.datasets[0].data = volts;
    this.chartData.data.datasets[0].backgroundColor = "black";
    this.chartData.data.datasets[0].borderColor = "black";

    new Chart(elementLine, this.chartData);
  },
};
</script>

<style lang="less" scoped>
th {
  max-width: 20%;
}
</style>
