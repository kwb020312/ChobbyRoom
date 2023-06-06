import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes();
    this.scene = this.experience.scene();
    this.canvas = this.experience.canvas;
  }
}
