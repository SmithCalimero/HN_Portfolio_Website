import { Html, useProgress } from '@react-three/drei';

// Define a functional component called `Loader` which displays a progress bar while some 3D models are being oaded
const Loader = () => {

  // Get the `progress` value from the `useProgress` hook
  const { progress } = useProgress();

  // Return a React element representing a span element and a paragraph element, which will display the `progress` value
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40, 
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

// Export the `Loader` component as the default export of this module
export default Loader;