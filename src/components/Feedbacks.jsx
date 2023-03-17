import { motion } from 'framer-motion';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// FeedbackCard component that takes in props to display a testimonial
const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  // Apply framer motion animation to the feedback card component
  <motion.div
    // Variants for the animation, using fadeIn and spring easing
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // Styling for the feedback card component
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Opening quotation mark */}
    <p className="text-white font-black text-[48px]">
      "
    </p>

    {/* Testimonial content */}
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        {testimonial}
      </p>

      {/* Information about the person giving the testimonial */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            {/* Username with blue gradient effect */}
            <span className="blue-text-gradient">
              @
            </span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {/* Designation and company */}
            {designation} of {company}
          </p>
        </div>

        {/* Profile picture of the person giving the testimonial */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// Feedbacks component that displays a list of feedback cards
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Container for the testimonials section */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        {/* Animated text for the section title */}
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>
            What others say
          </p>
          <h2 className={styles.sectionHeadText}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      {/* List of feedback cards */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          // Render FeedbackCard component for each testimonial in the list
          <FeedbackCard 
            key={testimonial.name} 
            index={index} 
            {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

// Export the Feedbacks component with the SectionWrapper higher-order component
export default SectionWrapper(Feedbacks, "")