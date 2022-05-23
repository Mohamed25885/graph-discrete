<template>
  <div class="row" v-show="inputs.length > 0">
    <div class="row text-center">
      <div class="col-5">
        <p class="text-dark">Angle</p>
      </div>
      <div class="col-5">
        <p class="text-dark">volts</p>
      </div>
      <div class="col-2">
        <p class="text-dark">Delete</p>
      </div>
    </div>
    <div v-for="(field, index) in inputs" :key="index">
      <div class="field form-group">
        <div class="row my-2">
          <div class="col-5">
            <input
              type="number"
              placeholder="angle"
              class="form-control"
              v-model="field.angle"
            />
          </div>
          <div class="col-5">
            <input
              type="number"
              placeholder="volts"
              class="form-control"
              v-model="field.volts"
            />
          </div>
          <div class="col-2">
            <button @click="remove(index)" class="btn btn-danger">
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    :class="{ 'my-2': inputs.length > 0, 'my-4': inputs.length == 0 }"
    class="d-flex justify-content-start"
  >
    <button @click="add" class="btn btn-primary w-25">Add</button>
  </div>
  <div :class="{ 'my-2': inputs.length > 0, 'my-4': inputs.length == 0 }">
    <button @click="graph" class="btn btn-dark w-25">Graph Data</button>
  </div>
</template>

<script>
export default {
  name: "DynamicInput",
  data() {
    return {
      inputs: [],
    };
  },
  mounted() {
    this.inputs = this.$store.getters.getInputs;
    //this.$root.$on("update", this.setInputs);
  },
  watch: {
    "$store.getters.getInputs": function () {
      this.inputs = this.$store.getters.getInputs;
    },
  },
  methods: {
    add() {
      this.inputs.push({
        volts: "",
        angle: "",
      });
    },
    setInputs(newInput) {
      this.inputs = newInput;
    },
    remove(index) {
      this.inputs.splice(index, 1);
    },
    graph() {
      console.log(this.inputs);
      if (this.inputs != null && this.inputs.length > 0) {
        this.$store.commit("setInputs", this.inputs);
        this.$router.push("graph");
      }
    },
  },
};
</script>
