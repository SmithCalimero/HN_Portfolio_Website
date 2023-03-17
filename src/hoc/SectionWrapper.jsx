import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

/* Higher Order Component (HOC) that takes a component and an ID name 
as props and returns a new component with some common functionality */
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            //add animation to the section
            <motion.section
                variants={staggerContainer()} // animation variants for motion.section
                initial="hidden" // initial state for motion.section
                whileInView="show" // animation state for motion.section while in view
                viewport={{ once: true, amount: 0.25 }} // trigger animation once viewport is at 25%
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // CSS classes for the section element
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component /> {/* Component that is passed as a prop to the SectionWrapper */}
            </motion.section>
        )
    }

export default SectionWrapper // export the SectionWrapper HOC