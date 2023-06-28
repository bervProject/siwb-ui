<template>
  <div class="container">
    <h1 class="title">Simple Image Watermarking Web Services</h1>
    <o-carousel
      :arrow="arrow"
      :arrow-both="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
    >
      <o-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
          </div>
        </section>
      </o-carousel-item>
    </o-carousel>
    <section class="section has-text-centered">
      <h2 class="title">Choose your options</h2>
      <div class="buttons is-centered">
        <o-button tag="router-link" to="/embed" variant="danger"
          >Embed</o-button
        >
        <o-button tag="router-link" to="/extract" variant="info"
          >Extract</o-button
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./home.ts" />
