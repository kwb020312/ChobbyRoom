import * as THREE from "three";
import Experience from "../Experience";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    this.progress = 0;

    this.setPath();
    this.onWheel();
  }

  setPath() {
    this.curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-10, 0, 10),
        new THREE.Vector3(-5, 5, 5),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(5, -5, 5),
        new THREE.Vector3(10, 0, 10),
      ],
      true
    );

    this.dummyCurve = new THREE.Vector3(0, 0, 0);

    const points = this.curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

    const curveObject = new THREE.Line(geometry, material);
    this.scene.add(curveObject);
  }

  onWheel() {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        this.progress += 0.001;
      } else {
        this.progress -= 0.001;
        if (this.progress < 0) {
          this.progress = 1;
        }
      }
    });
  }

  resize() {}

  update() {
    this.curve.getPointAt(this.progress % 1, this.dummyCurve);

    this.camera.orthographicCamera.position.copy(this.dummyCurve);
  }
}
