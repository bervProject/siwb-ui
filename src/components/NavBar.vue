<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/"> SIWB </router-link>

      <button
        type="button"
        class="button navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': activator }"
        @click="makeBurger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': activator }"
    >
      <div class="navbar-end">
        <router-link class="navbar-item" to="/embed">Embed</router-link>
        <router-link class="navbar-item" to="/extract">Extract</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./navbar.ts"></script>
