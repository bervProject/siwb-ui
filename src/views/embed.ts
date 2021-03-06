import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Extract extends Vue {
  file: Blob | null = null;
  message: string | null = null;
  submit() {
    if (this.file == null || this.message == null) {
      this.$buefy.notification.open({
        message: "Please Input a Valid File",
        type: "is-danger",
      });
      return;
    }
    const form = new FormData();
    const loadingComponent = this.$buefy.loading.open({
      container: null,
    });
    form.append("file", this.file);
    form.append("message", this.message);
    axios
      .post("https://siwb.herokuapp.com/api/embed", form, {
        responseType: "arraybuffer",
      })
      .then((response) => {
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
      .catch((err) => {
        this.$buefy.notification.open({
          message: err.message,
          type: "is-danger",
          hasIcon: true,
        });
      })
      .finally(() => {
        loadingComponent.close();
      });
  }
}
