<template>
  <div class="row">
    <div class="col-md-12">
      <application></application>
      <subscription></subscription>
    </div>
    <div class="col-md-6"></div>
    <div class="col-md-6"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Application from "@/components/Application.vue";
import Subscription from "@/components/Subscription.vue";

export default defineComponent({
  name: "dashboard",
  components: { Application, Subscription },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log("asdfs");
  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
