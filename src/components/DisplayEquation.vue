<template>
  <div>{{ this.equtaion }}</div>
</template>

<script>
export default {
  name: "DisplayEquation",
  /* props: ["sine", "cosine", "dc"], */
  data() {
    return {
      equtaion: "",
    };
  },
  mounted() {
    let dc = this.$store.getters?.getDc?.toFixed(2) ?? "";
    let sine = this.$store.getters?.getSine ?? [];
    let moreSine = sine.length > 3 ? true : false;
    sine = sine?.slice(0, 3);
    let cosine = this.$store.getters?.getCosine ?? [];
    let moreCosine = cosine.length > 3 ? true : false;
    cosine = cosine?.slice(0, 3);
    this.equtaion = "v= " + dc;
    for (let i = 0; i < 3; i++) {
      const sin = sine[i] ?? null;
      const cos = cosine[i] ?? null;
      let index = i;
      index = ++index == 1 ? "" : index;
      if (cos != null && cos != 0) {
        const sign = (cos ?? 0) < 0 ? " " : " +";
        this.equtaion += sign + cos?.toFixed(2) + "cos(" + index + "θ) ";
      }
      if (sin != null && sin != 0) {
        const sign = (sin ?? 0) < 0 ? " " : " +";
        this.equtaion += sign + sin?.toFixed(2) + "sin(" + index + "θ) ";
      }
    }
    if (moreSine || moreCosine) {
      this.equtaion += "...";
    }
  },
};
</script>
