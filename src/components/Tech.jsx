import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Tech component
const Tech = () => {
  // Returning a div with a flexbox layout and a gap of 10px between each child element
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Mapping over each technology object in the technologies array */}
      {technologies.map((technology) => (
        // Returning a div with a width and height of 28px and a unique key based on the technology name
        <div className="w-28 h-28" key={technology.name}>
          {/* Rendering BallCanvas component with icon prop set to the technology's icon */}
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

// Exporting the Tech component wrapped in the SectionWrapper HOC with an empty string as the second argument
export default SectionWrapper(Tech, "");