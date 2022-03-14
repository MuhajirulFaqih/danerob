function generatePlanet (container) {

    let renderer,
    scene,
    camera,
    sphereBg,
    nucleus,
    stars,
    controls,
    timeout_Debounce,
    noise = new SimplexNoise(),
    cameraSpeed = 0,
    blobScale = 3;
    
    if(container) {
        init();
        animate();
    }
    
    
    function init() {
        scene = new THREE.Scene();
    
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 1000)
        camera.position.set(0,0,230);
    
        const directionalLight = new THREE.DirectionalLight("#fff", 2);
        directionalLight.position.set(0, 50, -20);
        scene.add(directionalLight);
    
        let ambientLight = new THREE.AmbientLight("#ffffff", 1);
        ambientLight.position.set(0, 20, 20);
        scene.add(ambientLight);
    
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
    
        //OrbitControl
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 4;
        controls.maxDistance = 350;
        controls.minDistance = 150;
        controls.enablePan = false;
        controls.enableZoom = false;
    
        const loader = new THREE.TextureLoader();
        const texturenucleus = loader.load('https://i.ibb.co/m00kNBQ/planet.png');
    
    
        /*  Nucleus  */   
        texturenucleus.anisotropy = 16;
        let icosahedronGeometry = new THREE.IcosahedronGeometry(20, 30);
        let lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
        nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
        scene.add(nucleus);
    }
    
    
    function animate() {
    
    
        //Nucleus Animation
        nucleus.geometry.vertices.forEach(function (v) {
            let time = Date.now();
            v.normalize();
            let distance = nucleus.geometry.parameters.radius + noise.noise3D(
                v.x + time * 0.0005,
                v.y + time * 0.0003,
                v.z + time * 0.0008
            ) * blobScale;
            v.multiplyScalar(distance);
        })
        nucleus.geometry.verticesNeedUpdate = true;
        nucleus.geometry.normalsNeedUpdate = true;
        nucleus.geometry.computeVertexNormals();
        nucleus.geometry.computeFaceNormals();
        nucleus.rotation.y += 0.002;
    
        
        controls.update();
        // stars.geometry.verticesNeedUpdate = true;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    
    
    /*     Resize     */
    window.addEventListener("resize", () => {
        clearTimeout(timeout_Debounce);
        timeout_Debounce = setTimeout(onWindowResize, 80);
    });
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}

var container = document.getElementById("canvas_planet")
generatePlanet(container)

var container2 = document.getElementById("canvas_planet_2")
generatePlanet(container2)

var container3 = document.getElementById("canvas_planet_3")
generatePlanet(container3)

var container4 = document.getElementById("canvas_planet_4")
generatePlanet(container4)