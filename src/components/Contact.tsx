import React from "react";
import "./Contact.css"; 
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Иконки
import { motion } from "framer-motion";

const Contacts: React.FC = () => {
  return (
    <motion.section className="contacts" id="contacts"
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      <div className="container">
        <h2>Свяжитесь со мной</h2>
        <p>Вы можете написать мне на почту или связаться через соцсети.</p>
        <div className="contact-links">
          <a href="mailto:vas681@gmail.com" className="contact-link">
            <FaEnvelope /> vas681@gmail.com
          </a>
          <a href="https://github.com/AlexV-B" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/varnavin-braun-alexander/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;
