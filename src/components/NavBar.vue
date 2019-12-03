<template>
  <b-navbar fixed-bottom type="is-dark" shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <p>SIWB</p>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" to="/embed">Embed</b-navbar-item>
      <b-navbar-item tag="router-link" to="/extract">Extract</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>