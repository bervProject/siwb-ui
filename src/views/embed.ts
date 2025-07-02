import { defineComponent } from "vue";
import { useOruga } from "@oruga-ui/oruga-next";
import client from "../services";

export default defineComponent({
  setup() {
    const { oruga } = useOruga();
    return { oruga };
  },
  data(): {
    file: Blob | null;
    message: string | null;
  } {
    return {
      file: null,
      message: null,
    };
  },
  methods: {
    submit() {
      if (this.file == null || this.message == null) {
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
      form.append("message", this.message);
      client
        .post("/api/embed", form, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          // BLOB NAVIGATOR
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "download.png");
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
