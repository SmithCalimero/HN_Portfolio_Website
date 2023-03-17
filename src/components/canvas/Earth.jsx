import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

//React functional component named Earth
const Earth = () => {
  //is uses the useGLTF hook fromn react-three/drei to load a glTF 3D model
  const earth = useGLTF('./planet/scene.gltf');

  return (
    //this element renders the loaded model with the specific scale, position and rotation
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  )
}

//React functional component named EarthCanvas
const EarthCanvas = () => {
  return (
    //It uses the Canvas element from react-three/fiber to create a 3D canvas with properties
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/*Suspense is used to wrap the elements inside it, and the fallback is used to show a 
      a loading indicator while the model is being loaded*/}
      <Suspense fallback={<CanvasLoader />}>
        {/*Allows the user to interact with the 3D canvas by rotating the camera around the Earth*/}
        <OrbitControls
          autoRotate                  //this makes the camera rotate automatically
          enableZoom={false}          //this disables zooming
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas