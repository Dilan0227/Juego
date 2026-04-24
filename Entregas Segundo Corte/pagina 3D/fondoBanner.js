import * as THREE from 'three';

const contenedor = document.getElementById("contenedor-banner");
let ancho = contenedor.clientWidth;
let alto = contenedor.clientHeight;

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, ancho / alto, 0.1, 1000);
camara.position.z = 5;

const renderizador = new THREE.WebGLRenderer({ alpha: true }); 
renderizador.setSize(ancho, alto);
contenedor.appendChild(renderizador.domElement);

const geometria = new THREE.ConeGeometry(2, 3, 4);

const material = new THREE.MeshBasicMaterial({ 
    color: 0x8b4513, 
    wireframe: true 
});

const piramide = new THREE.Mesh(geometria, material);
escena.add(piramide);

function animar(tiempo) {
    piramide.rotation.y = tiempo / 2000;
    piramide.rotation.x = tiempo / 3000;

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