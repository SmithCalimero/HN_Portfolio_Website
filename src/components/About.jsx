import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// define a ServiceCard component that displays a service in a card
// this component receives an index, title, and icon as props
const ServiceCard = ({ index, title, icon }) => {
  return (
    // wrap the card in a Tilt component to add a tilt effect when hovering
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          // add styles to the inner content of the card
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* display the service icon */}
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          {/* display the service title */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// define an About component that displays information about the developer
const About = () => {
  return (
    <>
      {/* add an animation to the introduction */}
      <motion.div variants={textVariant()}>
        {/* display the section subtext */}
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        {/* display the section title */}
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      {/* add an animation to the paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {/* display information about the developer */}
        I'm a developer with experience in some programming languages 
        which I learned throughout my degree and during my free time.
        Aware that there's still a lot I don't know and always ready to learn whatever is necessary.
        I'm a quick learner and enthusiastic to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* display the services in a flex container */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* loop through the services and display them in ServiceCard components */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export the About component wrapped in a higher-order component
// that provides the section with additional styling and properties
export default SectionWrapper(About, "about")