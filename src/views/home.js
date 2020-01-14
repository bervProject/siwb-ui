export default {
  name: "home",
  data() {
    return {
      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      carousels: [
        { title: "Simple", color: "info" },
        { title: "Image Watermarking", color: "success" },
        { title: "Web Services", color: "warning" }
      ]
    };
  }
};
