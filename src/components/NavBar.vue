<template>
  <b-navbar fixed-top type="is-dark" wrapper-class="container" shadow>
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

<script lang="ts" src="./navbar.ts"></script>
