import * as THREE from "three";
import Experience from "../Experience";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    GSAP.registerPlugin(ScrollTrigger);
    this.setScrollTrigger();
  }

  setScrollTrigger() {}

  resize() {}

  update() {}
}
