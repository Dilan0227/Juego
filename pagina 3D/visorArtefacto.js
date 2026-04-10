import * as THREE from 'three';

const contenedor = document.getElementById("visor-interactivo");
let ancho = contenedor.clientWidth;
let alto = contenedor.clientHeight;

const escena = new THREE.Scene();

const camara = new THREE.PerspectiveCamera(45, ancho / alto, 0.1, 100);
camara.position.z = 5;

const renderizador = new THREE.WebGLRenderer({ alpha: true }); 
renderizador.setSize(ancho, alto);
contenedor.appendChild(renderizador.domElement);

// Geometría: Un aro simple (Torus) con menos segmentos para que sea básico
const geometria = new THREE.TorusGeometry(1.2, 0.3, 12, 30); 

// Material: Lambert. Es el material más básico que reacciona a la luz.
const material = new THREE.MeshLambertMaterial({ color: 0xe0b041 }); 

const artefacto = new THREE.Mesh(geometria, material);
escena.add(artefacto);

// Iluminación: Solo necesitamos UNA luz para que el Lambert funcione
const luz = new THREE.DirectionalLight(0xffffff, 1);
luz.position.set(2, 2, 5); // La luz viene desde arriba a la derecha
escena.add(luz);

// Añadimos una luz ambiental bajita para que las sombras no sean 100% negras
const luzAmbiente = new THREE.AmbientLight(0xffffff, 0.4);
escena.add(luzAmbiente);

// Animación
function animar(tiempo) {
    artefacto.rotation.y = tiempo / 1500;
    artefacto.rotation.x = Math.sin(tiempo / 1000) * 0.3; // Pequeño balanceo

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