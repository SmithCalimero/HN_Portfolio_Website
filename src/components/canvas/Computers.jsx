import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

// Define a component for the 3D computer model.
const Computers = ({ isMobile }) => {
  // Using a custom hook (useGLTF) from @react-three/drei to load a 3D model of a computer
  const computer = useGLTF('./desktop_pc/scene.gltf');

  // Return the mesh, including lights and the 3D model.
  return (
    // Creating a mesh, which is essentially an object in the 3D scene
    <mesh>
      {/* Adding various lights to the scene */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      {/* Adding the computer model to the scene as a primitive object */}
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} // Scaling the model based on whether the device is a mobile device or not
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Positioning the model based on whether the device is a mobile device or not
        rotation={[-0.01, -0.2, -0.1]} // Rotating the model
      />
    </mesh>
  )
}

// Define a component for the canvas containing the 3D computer model.
const ComputersCanvas = () => {

  // Initializing a state variable to track whether the device is a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])

  // Return the canvas with the 3D computer model.
  return (
    <Canvas
      frameloop="demand" // sets the frame loop to "demand" to only render when needed
      shadows // enables shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // sets the camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // enables the canvas to be saved as an image
    >
      <Suspense fallback={<CanvasLoader />}> {/* displays a loading component while the scene is loading */}
        <OrbitControls 
          enableZoom={false} // disables zooming with the mouse wheel
          maxPolarAngle={Math.PI / 2} // sets the maximum polar angle for the camera
          minPolarAngle={Math.PI / 2} // sets the minimum polar angle for the camera
        />
        <Computers isMobile={isMobile} /> {/* renders the 3D model of the computer */}
      </Suspense>
  
      <Preload all /> {/* preloads all the assets used in the scene */}
      
    </Canvas>
  )
}

export default ComputersCanvas