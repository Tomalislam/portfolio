
// GSAP animation for header
gsap.from(".hero-title", {
    duration: 2,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

// Simple Three.js setup for background animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('backgroundCanvas') });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', e.clientX - rect.left + 'px');
        card.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
});

       
