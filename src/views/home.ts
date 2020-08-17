import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "home",
})
export default class Home extends Vue {
  protected arrow = true;
  protected arrowBoth = false;
  protected arrowHover = false;
  protected iconPack = "mdi";
  protected iconPrev = "arrow-left";
  protected iconNext = "arrow-right";
  protected iconSize = "";
  protected carousels: Array<object> = [
    { title: "Simple", color: "info" },
    { title: "Image Watermarking", color: "success" },
    { title: "Web Services", color: "warning" },
  ];
}
