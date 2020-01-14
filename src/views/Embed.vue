<template>
  <div class="container has-text-centered">
    <h1 class="title">Embed</h1>
    <section>
      <b-field class="file">
        <b-upload v-model="file">
          <a class="button is-primary">
            <b-icon icon="upload"></b-icon>
            <span>Click to upload</span>
          </a>
        </b-upload>
        <span class="file-name" v-if="file">{{ file.name }}</span>
      </b-field>
      <b-field label="Message">
        <b-input v-model="message"></b-input>
      </b-field>
      <b-button type="is-info" expanded v-on:click="submit">Embed</b-button>
    </section>
  </div>
</template>

<script lang="ts" src="./embed.ts" />
