import * as THREE from "three";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

import Camera from "./Camera";
import Renderer from "./Renderer";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
  }
}
