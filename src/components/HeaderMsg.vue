<template>
  <div class="hello">
    <div class="space-1">
      <div class="mb-1">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMsg",
  props: {
    msg: String,
  },
};
</script>
