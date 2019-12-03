<template>
  <div id="app">
    <nav-bar></nav-bar>
    <section class="section">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
