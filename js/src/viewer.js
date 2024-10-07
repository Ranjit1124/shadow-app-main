import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";

var completeViewer = null;

function create() {

    completeViewer = new Viewer();
    completeViewer.createViewer();
    completeViewer.animate();
}


class Viewer {

    constructor() {
        this.camera = null;
        this.controls = null;
        this.container = null;
        this.scene = null;
        this.lights = null;
        this.renderer = null;
        this.mouse = null;
        this.raycaster = null;
    }

    createViewer() {
        //container
        this.container = document.getElementById('canvas');
        document.body.appendChild(this.container);

        //renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = false;
        this.renderer.setClearColor(0x404040);
        this.container.appendChild(this.renderer.domElement);

        //scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('grey');

        //camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 0);
        this.camera.lookAt(this.scene.position)
        this.scene.add(this.camera);
        this.lights = new THREE.AmbientLight();
        console.log(this.lights);
        
        this.scene.add(this.lights);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        //Window Resize Event
        window.addEventListener('resize', this.onWindowResize, false);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.add3DObjects();

    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

    add3DObjects() {

        const loader = new GLTFLoader();
        loader.load(
            './js/assets/edited.glb',
            ( gltf ) => {
                console.log(gltf);
                   
                // gltf.scene.rotation.x=Math.PI/2
                this.scene.add( gltf.scene );
                // this.scene.add( gltf.scenes );

                
                // console.log(gltf.scene.children[0].castShadow=true);
                
            },
        )


const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 5 );
directionalLight2.position.x=3
directionalLight2.position.y=5
directionalLight2.rotation.y=Math.PI/2
this.scene.add( directionalLight2 );
const helper2 = new THREE.DirectionalLightHelper( directionalLight2, 2 );
this.scene.add( helper2 );

const directionalLight3 = new THREE.DirectionalLight( 0xffffff, 5 );
directionalLight3.position.x=-3
directionalLight3.position.y=5
directionalLight3.rotation.y=Math.PI/2
this.scene.add( directionalLight3 );
const helper3 = new THREE.DirectionalLightHelper( directionalLight3, 2 );
this.scene.add( helper3 );

        // const geometry = new THREE.PlaneGeometry( 10,10 );
        // const material = new THREE.MeshBasicMaterial( {color: 'green', side: THREE.DoubleSide} );
        // const plane = new THREE.Mesh( geometry, material );
        // plane.rotation.x=Math.PI/2
        // this.scene.add( plane );
        this.camera.position.z=5
        // this.camera.rotation.y=-Math.PI/2

       /*  const pointLightBlue = new THREE.SpotLight( 'blue',500 );
pointLightBlue.position.set( 15,0,0 );
pointLightBlue.castShadow = true;
pointLightBlue.distance=20
pointLightBlue.angle=-1
pointLightBlue.decay=0
this.scene.add( pointLightBlue );
new TWEEN.Tween(pointLightBlue.position)
.to({ x:2.8,y:1.5, z:1.3},5000)
.easing(TWEEN.Easing.Quadratic.InOut)
.start();
 */


    //  const tween = new Tween.Tween(pointLightBlue.position)
    // .to({ x: 2.8, y: 1.5, z: 1.3 }, 2000) // target position and duration
    // .easing(Tween.Easing.Quadratic.Out) // easing function
    // .onComplete(() => {
    //     console.log('Animation complete!');
    // })
    // tween.start();
// const pointLightBlueHelper = new THREE.SpotLightHelper( pointLightBlue );
// this.scene.add( pointLightBlueHelper );
/* 
const pointLightRed = new THREE.SpotLight( 'red',500 );
pointLightRed.position.set( -2.4, 1.5, 1.5 );
// pointLightBlue.map = new THREE.TextureLoader().load( url );

pointLightRed.castShadow = true;
pointLightRed.distance=20

pointLightRed.angle=-1
pointLightRed.decay=0
this.scene.add( pointLightRed ); */
// const pointLightRedHelper = new THREE.SpotLightHelper( pointLightRed );
// this.scene.add( pointLightRedHelper );

/*  const pointLightGreen = new THREE.SpotLight( 'green',1000 );
pointLightGreen.position.set( 15,0,0 );
// pointLightGreen.map = new THREE.TextureLoader().load( './js/assets/green.jpeg' );
pointLightGreen.castShadow = true;
pointLightGreen.distance=10
pointLightGreen.angle=-1
pointLightGreen.decay=0
this.scene.add( pointLightGreen );

 new TWEEN.Tween(pointLightGreen.position)
        .to({ x:2.8,y:1.5, z:-1.3},5000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start(); */
        // const pointLightGreenHelper = new THREE.SpotLightHelper( pointLightGreen );
        // this.scene.add( pointLightGreenHelper );
/*         
const pointLightYellow = new THREE.SpotLight( 'Yellow',500 );
pointLightYellow.position.set( -2.4, 1.5, -1.5 );
pointLightYellow.castShadow = true;
pointLightYellow.distance=20
pointLightYellow.angle=-1
pointLightYellow.decay=0
this.scene.add( pointLightYellow ); */
// const pointLightYellowHelper = new THREE.SpotLightHelper( pointLightYellow );
// this.scene.add( pointLightYellowHelper );

/* const pointLightDining = new THREE.PointLight( '#34ebd5',1000 );
pointLightDining.position.set( 0, 1.5, 1.5 );
pointLightDining.castShadow = true;
pointLightDining.distance=20
pointLightDining.angle=-1
pointLightDining.decay=0
this.scene.add( pointLightDining ); */
// const pointLightDiningHelper = new THREE.SpotLightHelper( pointLightDining );
// this.scene.add( pointLightDiningHelper );



    }


    animate() {
        "use strict"
        if (this.animate) {
            this.frameId = requestAnimationFrame(this.animate.bind(this));
        }
        TWEEN.update()
        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

}

export { completeViewer, create }