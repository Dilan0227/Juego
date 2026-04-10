import * as THREE from 'three';

const contenedor = document.getElementById("contenedor-banner");
let ancho = contenedor.clientWidth;
let alto = contenedor.clientHeight;

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, ancho / alto, 0.1, 1000);
camara.position.z = 5;

const renderizador = new THREE.WebGLRenderer({ alpha: true }); // alpha: true quita el fondo negro
renderizador.setSize(ancho, alto);
contenedor.appendChild(renderizador.domElement);

// Geometría: Una pirámide (ConeGeometry con 4 caras)
const geometria = new THREE.ConeGeometry(2, 3, 4);

// Material: Wireframe (Muestra solo las líneas, es muy técnico y fácil de explicar)
const material = new THREE.MeshBasicMaterial({ 
    color: 0x8b4513, 
    wireframe: true 
});

const piramide = new THREE.Mesh(geometria, material);
escena.add(piramide);

// Animación
function animar(tiempo) {
    piramide.rotation.y = tiempo / 2000;
    piramide.rotation.x = tiempo / 3000;

    renderizador.render(escena, camara);
}
renderizador.setAnimationLoop(animar);

// Responsive
window.addEventListener('resize', () => {
    ancho = contenedor.clientWidth;
    alto = contenedor.clientHeight;
    renderizador.setSize(ancho, alto);
    camara.aspect = ancho / alto;
    camara.updateProjectionMatrix();
});