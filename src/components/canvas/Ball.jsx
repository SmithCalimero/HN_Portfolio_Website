import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader';

// A functional component named "Ball" with
const Ball = (props) => { // "props" as the input parameter
  // Retrieve the texture using the "useTexture" hook and the URL passed in as a prop
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float 
      speed={1.75} // Set the speed of the "float" animation
      rotationIntensity={1} // Set the intensity of the "rotation" animation
      floatIntensity={2} // Set the intensity of the "float" animation
    >
      <ambientLight intensity={0.25} /> {/* Add an ambient light to the scene with a certain intensity */}
      <directionalLight position={[0, 0, 0.05]} /> {/* Add a directional light to the scene with a certain position */}
      <mesh castShadow receiveShadow scale={2.75}> {/*Create a mesh that can cast and receive shadows and scale it */}
        <icosahedronGeometry args={[1, 1]} /> {/* Add an icosahedron geometry to the mesh with certain arguments */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset // Enable polygon offset for this material
          polygonOffsetFactor={-5} // Set the polygon offset factor to -5
          flatShading // Enable flat shading for this material
        />
        <Decal
          position={[0, 0, 1]} // Set the position of the decal on the mesh
          rotation={[2 * Math.PI, 0, 6.25]} // Set the rotation of the decal on the mesh
          scale={1} // Set the scale of the decal on the mesh
          map={decal} // Use the retrieved texture as the decal
          flatShading // Enable flat shading for the decal material
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => { // A functional component named "BallCanvas" with "icon" as the input parameter
  return (
    <Canvas
      frameloop="demand" // Set the frameloop to "demand"
      gl={{ preserveDrawingBuffer: true }} // Set the WebGL context to preserve the drawing buffer
    >

      <Suspense fallback={<CanvasLoader />}> {/* Use the "Suspense" component with a fallback of a "CanvasLoader" component */}
        <OrbitControls 
          enableZoom={false} // Disable zoom for the "OrbitControls" component
        />
        <Ball imgUrl={icon} /> {/* Render the "Ball" component with the "icon" prop passed in as the "imgUrl" prop */}
      </Suspense>

      <Preload all /> {/* Use the "Preload" component to preload all assets */}
    </Canvas>
  )
}

export default BallCanvas // Export the "BallCanvas" component as the default export