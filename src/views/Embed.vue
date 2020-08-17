<template>
  <div class="container has-text-centered">
    <section>
      <div class="card">
        <div class="card-header">
          <h2 class="card-header-title">Embed</h2>
        </div>
        <div class="card-content">
          <b-field class="file">
            <b-upload v-model="file" expanded>
              <a class="button is-dark is-fullwidth">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./embed.ts" />
