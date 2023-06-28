<template>
  <div class="container has-text-centered">
    <section>
      <div class="card">
        <div class="card-header">
          <h2 class="card-header-title">Embed</h2>
        </div>
        <div class="card-content">
          <o-field class="file">
            <o-upload v-model="file" expanded>
              <a class="button is-dark is-fullwidth">
                <o-icon icon="upload"></o-icon>
                <span>Click to upload</span>
              </a>
            </o-upload>
            <span class="file-name" v-if="file">{{ file.name }}</span>
          </o-field>
          <o-field label="Message">
            <o-input v-model="message"></o-input>
          </o-field>
          <o-button variant="info" expanded v-on:click="submit">Embed</o-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./embed.ts" />
