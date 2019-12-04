<template>
  <div class="container has-text-centered">
    <h1 class="title">Extract</h1>
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
      <b-button type="is-info" expanded v-on:click="submit">Extract</b-button>
    </section>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Extract extends Vue {
  file: Blob | null = null;
  submit() {
    if (this.file == null) {
      alert("Empty");
      return;
    }
    let form = new FormData();
    const loadingComponent = this.$buefy.loading.open({
      container: null
    });
    form.append("file", this.file);
    axios
      .post("https://siwb.herokuapp.com/api/extract", form, {
        responseType: "blob"
      })
      .then(response => {
        let fileName = response.headers["content-disposition"].split(
          "filename="
        )[1];
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          // IE variant
          window.navigator.msSaveOrOpenBlob(
            new Blob([response.data], {
              type: "text/plain"
            }),
            fileName
          );
        } else {
          const url = window.URL.createObjectURL(
            new Blob([response.data], {
              type: "text/plain"
            })
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            response.headers["content-disposition"].split("filename=")[1]
          );
          document.body.appendChild(link);
          link.click();
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
