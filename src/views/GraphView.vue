<template>
  <div class="container space-1" v-show="!this.isInputEmpty()">
    <GraphTable :inputs="this.inputs" />
    <DisplayEquation :inputs="this.inputs" />
    <LineChart />
  </div>
  <div class="container" v-show="this.isInputEmpty()">Please Input Data</div>
</template>

<script>
import GraphTable from "@/components/GraphTable.vue";
import DisplayEquation from "@/components/DisplayEquation.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "GraphView",
  components: {
    GraphTable,
    DisplayEquation,
    LineChart,
  },
  data() {
    return {
      inputs: [],
      sine: [],
      cosine: [],
      dc: 0,
    };
  },
  mounted() {
    this.inputs = this.$store.getters.getInputs;
    this.calculate();
  },
  methods: {
    isInputEmpty() {
      if (this.inputs.length == 0) return true;
      if (this.inputs.length == 1) {
        if (!this.inputs[0].angle && this.inputs[0].angle !== 0) return true;
      }
      return false;
    },
    calculate() {
      const fraction = 2 / this.inputs.length;
      for (let index = 0; index < 101; index++) {
        let cosine = 0;
        let sine = 0;
        for (const input of this.inputs) {
          if (index == 0) {
            this.dc += input.volts / this.inputs.length;
          } else {
            let angle = (input.angle * Math.PI) / 180;
            let voltage = input.volts;

            cosine += voltage * fraction * Math.cos(angle * index);

            sine += voltage * fraction * Math.sin(angle * index);
          }
        }
        if (index != 0) {
          this.sine.push(sine);
          this.cosine.push(cosine);
        }
      }
      this.$store.commit("setDc", this.dc);
      this.$store.commit("setSine", this.sine);
      this.$store.commit("setCosine", this.cosine);
    },
  },
};
</script>
