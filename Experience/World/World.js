import Experience from "../Experience";
import Environment from "./Environment";
import Room from "./Room";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
      console.log("방 모델 불러오기 완료");
    });
  }

  resize() {}

  update() {}
}
