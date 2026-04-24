import * as THREE from 'three';

const container = document.getElementById('escena');
const scene = new THREE.Scene();

const width = container.clientWidth;
const height = container.clientHeight;

const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);

camera.position.z = 4.5; 
camera.position.y = 0.8; 

const renderer = new THREE.WebGLRenderer({ antialias: true, });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const grupoBebida = new THREE.Group();

const vasoGeo = new THREE.CylinderGeometry(1, 0.7, 2.5, 32);
const vasoMat = new THREE.MeshBasicMaterial({ color: 0xda291c }); 
const vaso = new THREE.Mesh(vasoGeo, vasoMat);
grupoBebida.add(vaso);

const tapaGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.2, 32);
const tapaMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); 
const tapa = new THREE.Mesh(tapaGeo, tapaMat);
tapa.position.y = 1.35; 
grupoBebida.add(tapa);

const pitilloGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 16);
const pitilloMat = new THREE.MeshBasicMaterial({ color: 0xffc72c }); 
const pitillo = new THREE.Mesh(pitilloGeo, pitilloMat);
pitillo.position.y = 2.2; 
pitillo.rotation.z = -0.3; 
grupoBebida.add(pitillo);

grupoBebida.position.y = -0.6;

scene.add(grupoBebida);

function animate() {

    grupoBebida.rotation.y += 0.02; 
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);