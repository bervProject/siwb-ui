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

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Extract extends Vue {
  file: Blob | null = null;
  message: string | null = null;
  submit() {
    if (this.file == null || this.message == null) {
      alert("Empty");
      return;
    }
    const form = new FormData();
    const loadingComponent = this.$buefy.loading.open({
      container: null
    });
    form.append("file", this.file);
    form.append("message", this.message);
    axios
      .post("https://siwb.herokuapp.com/api/embed", form, {
        responseType: "arraybuffer"
      })
      .then(response => {
        if (!window.navigator.msSaveOrOpenBlob) {
          // BLOB NAVIGATOR
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "download.png");
          document.body.appendChild(link);
          link.click();
        } else {
          // BLOB FOR EXPLORER 11
          window.navigator.msSaveOrOpenBlob(
            new Blob([response.data]),
            "download.png"
          );
        }
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        loadingComponent.close();
      });
  }
}
</script>
