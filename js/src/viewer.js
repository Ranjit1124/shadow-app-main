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
            './js/assets/floor 3.glb',
            ( gltf ) => {
                console.log(gltf);
                   
                this.scene.add( gltf.scene );

                //  for(let i=8;i<=15;i++){
                //     const room1=gltf.scene.children[0].children[i];
                //     const box = new THREE.Box3().setFromObject(room1);
                //     const boxCenter = box.getCenter(new THREE.Vector3());
                //               const helper = new THREE.Box3Helper( box, 'red' );
                //               console.log('b1center',boxCenter);
                //               console.log(box);
                //             this.scene.add( helper );
    
                //             const geometry = new THREE.BoxGeometry();
                //             const material = new THREE.MeshBasicMaterial( { color: 'blue' } );
                //             const cube = new THREE.Mesh( geometry, material );
                //             cube.scale.set(0,0,0)
                //             cube.position.copy(boxCenter)
                //             this.scene.add( cube )
    
                //             const  cubeX=   box.max.x - box.min.x
                //             const cubeZ = box.max.z - box.min.z
    
                //             new TWEEN.Tween(cube.scale)
                //             .to({ x: cubeX, y: 0.1, z: cubeZ }, 3000)
                //             .easing(TWEEN.Easing.Quadratic.InOut)
                //             .start();
                //  }
              

                const room1=gltf.scene.children[0].children[8];
                const box = new THREE.Box3().setFromObject(room1);
                const boxCenter = box.getCenter(new THREE.Vector3());
                          const helper = new THREE.Box3Helper( box, 'red' );
                          console.log('b1center',boxCenter);
                          console.log(box);
                        this.scene.add( helper );

                        const geometry = new THREE.BoxGeometry();
                        const material = new THREE.MeshBasicMaterial( { color: 'blue' } );
                        const cube = new THREE.Mesh( geometry, material );
                        cube.scale.set(0,0,0)
                        cube.position.copy(boxCenter)
                        this.scene.add( cube )

                        const  cubeX=   box.max.x - box.min.x
                        const cubeZ = box.max.z - box.min.z

                        new TWEEN.Tween(cube.scale)
                        .to({ x: cubeX, y: 0.1, z: cubeZ }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .start();
                                        


                        const room2=gltf.scene.children[0].children[9];
                        const box2 = new THREE.Box3().setFromObject(room2);
                        // const boxSize = box.getSize(new THREE.Vector3()).length();
                        const boxCenter2 = box2.getCenter(new THREE.Vector3());
                                  const helper2 = new THREE.Box3Helper( box2, 'red' );
                                  console.log('bc',boxCenter2);
                                this.scene.add( helper2 );
                                const geometry2 = new THREE.BoxGeometry();
                        const material2 = new THREE.MeshBasicMaterial( { color: 'red' } );
                        const cube2 = new THREE.Mesh( geometry2, material2 );
                        cube2.scale.set(0,0,0)
                        cube2.position.copy(boxCenter2)
                        this.scene.add( cube2 )

                        const  cubeX2=   box.max.x - box.min.x
                        const cubeZ2 = box.max.z - box.min.z

                        new TWEEN.Tween(cube2.scale)
                        .to({ x: cubeX2, y: 0.1, z: cubeZ2 }, 3000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .start();

                        const room3=gltf.scene.children[0].children[15];
                        const box3 = new THREE.Box3().setFromObject(room3);
                        const boxCenter3 = box3.getCenter(new THREE.Vector3());
                                  const helper3 = new THREE.Box3Helper( box3, 'red' );
                                  console.log('b1center',boxCenter3);
                                  console.log(box3);
                                this.scene.add( helper3 );
        
                                const geometry3 = new THREE.BoxGeometry();
                                const material3 = new THREE.MeshBasicMaterial( { color: 'green' } );
                                const cube3 = new THREE.Mesh( geometry3, material3 );
                                cube3.scale.set(0,0,0)
                                cube3.position.copy(boxCenter3)
                                this.scene.add( cube3 )
        
                                const  cubeX3=   box3.max.x - box3.min.x
                                const cubeZ3 = box3.max.z - box3.min.z
        
                                new TWEEN.Tween(cube3.scale)
                                .to({ x: cubeX3, y: 0.1, z: cubeZ3 }, 3000)
                                .easing(TWEEN.Easing.Quadratic.InOut)
                                .start();
                                                
        

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

        this.camera.position.z=5
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