import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

const MODEL_URL = "/models/tracker.glb";

function initTracker3D(container: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "none";
  container.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0.6, 4);

  // Environment lighting (matches the "city" preset feel from the previous build)
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envRT = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
  scene.environment = envRT.texture;

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(5, 5, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0xff9d00, 0.5);
  rimLight.position.set(-4, 2, -3);
  scene.add(rimLight);

  const spotLight = new THREE.SpotLight(0xffb347, 0.7, 0, 0.6, 1);
  spotLight.position.set(0, 4, 3);
  scene.add(spotLight);

  // Ground shadow catcher
  const shadowGeo = new THREE.PlaneGeometry(6, 6);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45, color: 0xff9d00 });
  const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -1.3;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  const group = new THREE.Group();
  scene.add(group);

  const loader = new GLTFLoader();
  loader.load(
    MODEL_URL,
    (gltf) => {
      const model = gltf.scene;

      model.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if ((mesh as any).isMesh) {
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          const applyMat = (m: THREE.MeshStandardMaterial) => {
            if ("metalness" in m) {
              m.metalness = Math.max(m.metalness ?? 0, 0.45);
              m.roughness = Math.min(m.roughness ?? 1, 0.55);
              m.envMapIntensity = 1.1;
              m.needsUpdate = true;
            }
          };
          const mat = mesh.material as THREE.MeshStandardMaterial | THREE.MeshStandardMaterial[];
          Array.isArray(mat) ? mat.forEach(applyMat) : applyMat(mat);
        }
      });

      // Scale FIRST, then compute the (now-scaled) bounding box and center it.
      // Order matters: translation is not re-scaled by a later scale.setScalar(),
      // so centering before scaling leaves the model visibly off-center/offset.
      const preScaleBox = new THREE.Box3().setFromObject(model);
      const preScaleSize = new THREE.Vector3();
      preScaleBox.getSize(preScaleSize);
      const maxDim = Math.max(preScaleSize.x, preScaleSize.y, preScaleSize.z) || 1;
      const targetSize = 2.0;
      const scale = targetSize / maxDim;
      model.scale.setScalar(scale);

      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center);

      group.add(model);
      canvas.style.display = "block";
      const loadingEl = container.querySelector(".tracker3d-loading") as HTMLElement | null;
      if (loadingEl) loadingEl.style.display = "none";
      container.classList.add("tracker3d-loaded");
    },
    undefined,
    (err) => {
      console.warn("[Tracker3D] Failed to load model, showing fallback:", err);
      const loadingEl = container.querySelector(".tracker3d-loading") as HTMLElement | null;
      if (loadingEl) loadingEl.style.display = "none";
      const fallback = container.querySelector(".tracker3d-fallback") as HTMLElement | null;
      if (fallback) fallback.classList.remove("hidden");
      container.classList.add("tracker3d-error");
    }
  );

  function resize() {
    const { clientWidth, clientHeight } = container;
    if (clientWidth === 0 || clientHeight === 0) return;
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let rafId = 0;
  let lastTime = performance.now();
  function animate() {
    rafId = requestAnimationFrame(animate);
    const now = performance.now();
    const delta = (now - lastTime) / 1000;
    lastTime = now;

    if (!prefersReducedMotion) {
      group.rotation.y += delta * 0.35;
    }

    renderer.render(scene, camera);
  }
  animate();

  // Pause rendering when off-screen to save battery
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!rafId) {
            lastTime = performance.now();
            animate();
          }
        } else if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      }
    },
    { threshold: 0.01 }
  );
  intersectionObserver.observe(container);
}

function boot() {
  const container = document.getElementById("hero-3d-model");
  if (!container) return;
  try {
    initTracker3D(container);
  } catch (err) {
    console.warn("[Tracker3D] Failed to initialize:", err);
    const loadingEl = container.querySelector(".tracker3d-loading") as HTMLElement | null;
    if (loadingEl) loadingEl.style.display = "none";
    const fallback = container.querySelector(".tracker3d-fallback") as HTMLElement | null;
    if (fallback) fallback.classList.remove("hidden");
    container.classList.add("tracker3d-error");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
