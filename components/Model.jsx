import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
const Model = ({ url, isMobile }) => {
    const { scene, nodes, materials, animations } = useGLTF(url, '/draco-gltf/');
    const { size } = useThree();
    console.log("Model scenes: ", scene);
    console.log("Model nodes: ", nodes);
    console.log("Model materials: ", materials);
    console.log("Model animations: ", animations);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={0.7} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024} />
            <primitive
                object={scene}
                scale={isMobile ? 1.5 : 5.5}
                position={isMobile ? [0, 10, 0] : [1, -3, 0]}
                rotation={[0, 1.5, 0]}
            />
        </mesh>
    );
};

export default Model;
