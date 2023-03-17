import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

//Component to render a starry sky with randomly generated stars
const Stars = (props) => {
  // Create a ref to the points object that holds the stars
  const ref = useRef();
  // Generate an array of 5000 random 3D points within a sphere of radius 1.2
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  // Use the useFrame hook to update the star positions on every frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

   // Render the stars as a Points object with a PointMaterial
  return (
    /* Create a group that can hold other objects in the scene. 
    The group is rotated by 45 degrees around the z-axis, 
    which means that the points will be oriented at a slight angle. */
    <group rotation={[0, 0, Math.PI / 4]}>
      
      {/* Create a set of points in 3D space */}
      <Points 
        ref={ref} //the ref variable declared earlier in the component will hold a reference to the Points object
        positions={sphere} //sphere is an array of 3D coordinates that represent the positions of the stars in the scene
        stride={3} //each set of 3 values in the positions array represents the x, y, and z coordinates of a single point
        frustumCulled //the Points object will not be rendered if it is outside the camera's view frustum
        {...props} //spreads any additional props that might be passed in when the component is used elsewhere
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Component to render the canvas with the starry sky
const StarsCanvas = () => {
  return (
    // Render the canvas and make it full screen
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Use the Suspense component to handle asynchronous loading */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        {/* Use the Preload component to preload assets */}
        <Preload all />
      </Canvas>
    </div>
  )
}

// Export the StarsCanvas component as the default export of the module
export default StarsCanvas