import { useProgrammatic } from "@oruga-ui/oruga-next";
import client from "../services";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const oruga = useProgrammatic();
    return { oruga };
  },
  data(): {
    file: Blob | null;
  } {
    return {
      file: null,
    };
  },
  methods: {
    submit() {
      if (this.file == null) {
        this.oruga.notification.open({
          message: "Please Input a Valid File",
          variant: "danger",
        });
        return;
      }
      const form = new FormData();
      const loadingComponent = this.oruga.loading.open({
        container: null,
      });
      form.append("file", this.file);
      client
        .post("/api/extract", form, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          // BLOB NAVIGATOR
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "download.txt");
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          this.oruga.notification.open({
            message: err.message,
            variant: "danger",
            hasIcon: true,
          });
        })
        .finally(() => {
          loadingComponent.close();
        });
    },
  },
});
