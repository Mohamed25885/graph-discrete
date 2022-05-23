<template>
  <div class="container space-1">
    <HeaderMsg msg="Graph Discrete Data" />
    <div class="row text-center justify-content-center">
      <button
        v-for="(data, index) in seeder"
        :key="index"
        class="btn btn-secondary col-6 col-lg-3 m-2"
        @click="seed(index)"
      >
        Question number {{ index + 1 }}
      </button>
    </div>
    <DynamicInput />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMsg from "@/components/HeaderMsg";
import DynamicInput from "@/components/DynamicInput";
import Seeder from "../store/seeder";

export default {
  name: "HomeView",
  data() {
    return {
      seeder: Seeder,
    };
  },
  methods: {
    seed(index) {
      console.log(this.seeder[index]);
      this.$store.commit("setInputs", this.seeder[index]);
      //this.$emit("update", this.seeder[index]);
    },
  },

  components: {
    HeaderMsg,
    DynamicInput,
  },
};
</script>
