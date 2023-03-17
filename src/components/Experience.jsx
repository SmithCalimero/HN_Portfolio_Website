import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Functional component called 'ExperienceCard' that takes in an object called 'experience' as its prop
const ExperienceCard = ({ experience }) => ( 
  <VerticalTimelineElement // render the 'VerticalTimelineElement' component with the following props:
    contentStyle={{ background: '#1d1836', color: '#fff' }} // set background and font color of the content
    contentArrowStyle={{ borderRight: '7px solid  #232631' }} // set style of the content arrow
    date={experience.date} // set date of the experience
    iconStyle={{ background: experience.iconBg }} // set background color of the icon
    // render the icon as a div containing an image with the source and alternative text based on the experience
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >{/* */}

    <div>
      {/*render the title of the experience*/} 
      <h3 className="text-white text-[24px] font-bold">
        {experience.title} 
      </h3>
      {/*render the name of the company*/}
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name} 
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {/* render a list of points based on the experience*/}
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`} 
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement> // close the 'VerticalTimelineElement' component
)

// define a functional component called 'Experience'
const Experience = () => {
  return (
    <>
      {/* // render a div with motion animation and the 'textVariant' prop*/}
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>

        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {/* render the 'VerticalTimeline' component */}
        <VerticalTimeline> 
          {/* map over the experiences and render an 'ExperienceCard' component for each */} 
          {experiences.map((experience, index) => ( 
            <ExperienceCard 
              key={index} 
              experience={experience}
            />

          ))}
        </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience, "work")