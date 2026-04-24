import * as THREE from 'three';

const contenedor = document.getElementById("visor-interactivo");
let ancho = contenedor.clientWidth;
let alto = contenedor.clientHeight;

const escena = new THREE.Scene();

const camara = new THREE.PerspectiveCamera(45, ancho / alto, 0.1, 100);
camara.position.set(0, 1, 5);

const renderizador = new THREE.WebGLRenderer({ alpha: true, antialias: true }); 
renderizador.setSize(ancho, alto);
contenedor.appendChild(renderizador.domElement);

const poporo = new THREE.Group();

const materialOro = new THREE.MeshStandardMaterial({ 
    color: 0xe0b041, 
    metalness: 0.8, 
    roughness: 0.2 
});

const cuerpoGeo = new THREE.SphereGeometry(1, 32, 32);
const cuerpo = new THREE.Mesh(cuerpoGeo, materialOro);
cuerpo.scale.set(1.1, 0.9, 1.1); 
poporo.add(cuerpo);

const cuelloGeo = new THREE.CylinderGeometry(0.25, 0.4, 1.2, 32);
const cuello = new THREE.Mesh(cuelloGeo, materialOro);
cuello.position.y = 0.9;
poporo.add(cuello);

const esferaSupGeo = new THREE.SphereGeometry(0.3, 16, 16);
const posiciones = [
    {x: 0.2, z: 0.2}, {x: -0.2, z: 0.2},
    {x: 0.2, z: -0.2}, {x: -0.2, z: -0.2}
];

posiciones.forEach(pos => {
    const esfera = new THREE.Mesh(esferaSupGeo, materialOro);
    esfera.position.set(pos.x, 1.5, pos.z);
    poporo.add(esfera);
});

const baseGeo = new THREE.CylinderGeometry(0.5, 0.3, 0.2, 32);
const base = new THREE.Mesh(baseGeo, materialOro);
base.position.y = -0.9;
poporo.add(base);

escena.add(poporo);

const luzPrincipal = new THREE.DirectionalLight(0xffffff, 2);
luzPrincipal.position.set(2, 4, 5);
escena.add(luzPrincipal);

const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.6);
escena.add(luzAmbiente);

function animar(tiempo) {
    poporo.rotation.y = tiempo / 2500;
    renderizador.render(escena, camara);
}
renderizador.setAnimationLoop(animar);

window.addEventListener('resize', () => {
    ancho = contenedor.clientWidth;
    alto = contenedor.clientHeight;
    renderizador.setSize(ancho, alto);
    camara.aspect = ancho / alto;
    camara.updateProjectionMatrix();
});