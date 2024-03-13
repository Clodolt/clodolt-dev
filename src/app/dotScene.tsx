'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DotsBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = mountRef.current?.clientWidth ?? 0;
    const height = mountRef.current?.clientHeight ?? 0;
    const mouse = new THREE.Vector2();
    const particlesData: Array<{ velocity: THREE.Vector3, numConnections: number }> = [];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;
    camera.position.x = -15;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);


    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
      particlesData.push({ velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2), numConnections: 0 });
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
    }

    function onMouseScroll(event: Event) {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      let position = window.scrollY;

      let scrollPercent = position / (fullHeight - windowHeight);
      console.log(scrollPercent);
      if (scrollPercent < 0.5) {
        camera.position.z = 20 - scrollPercent * 20;
        camera.position.x = -15 + scrollPercent * 30;
        particleMaterial.size = 0.05 - scrollPercent * 0.1;
        
        
      }
    }

    function onWindowResize(){

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize( window.innerWidth, window.innerHeight );
  
  }
    
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('scroll', onMouseScroll, false);
    window.addEventListener( 'resize', onWindowResize, false );

    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;
      const positions = particles.getAttribute('position');

      positions.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onMouseScroll);
      window.removeEventListener('resize', onWindowResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-screen h-screen block fixed top-0 left-0 -z-[9999]" />;
};

export default DotsBackground;
