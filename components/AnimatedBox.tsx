import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
      <mesh ref={meshRef} scale={[1.5,1.5,1.5]}>
        <boxGeometry attach={"geometry"} />
        <meshStandardMaterial />
      </mesh>
  );
}

export default AnimatedBox;