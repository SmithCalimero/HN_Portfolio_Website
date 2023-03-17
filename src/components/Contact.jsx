import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Define Contact component which will handle the contact form
const Contact = () => {
  // Initialize form reference and form state with name, email, and message fields
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Initialize loading state for the button
  const [loading, setLoading] = useState(false);

  // Handle form submission, updates the form state with the user input
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  // Handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using emailjs package
    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,  // EmailJS service ID
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // EmailJS template ID
      {
        from_name: form.name,
        to_name: "Henrique",
        from_email: form.email,
        to_email: "henriquepnegrao@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY // EmailJS public key
    )
    .then(() => {
      // Reset form and loading state on successful submission
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      // Reset loading state on submission error
      setLoading(false);
      console.error(error);
      //and alert that there was an error to the user
      alert("Ahh, something went wrong. Please try again.");
    }
    )
  }

  // Render Contact component
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>

        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <textarea  
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button 
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </motion.div>
      
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")