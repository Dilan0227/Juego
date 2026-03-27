import * as THREE from 'three';
const Banner = document.getElementById("Banner");
let G = Banner.clientWidth;
 let F = Banner.clientHeight;

 console.log(G + "," + F )

const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer1 = new THREE.WebGLRenderer();
//renderer.setSize( window.innerWidth, window.innerHeight );
renderer1.setSize(G,F);
renderer1.setAnimationLoop( animate1 );
//document.body.appendChild( renderer.domElement );
Banner.appendChild(renderer1.domElement)

const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene1.add( cube1 );

camera1.position.z = 5;

function animate1( time1 ) {

  cube1.rotation.x = time1 / 2000;
  cube1.rotation.y = time1 / 1000;

  renderer1.render( scene1, camera1 );

}