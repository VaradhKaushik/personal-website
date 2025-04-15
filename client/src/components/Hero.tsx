import { motion } from "framer-motion";

export default function Hero() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="md:w-3/5 mt-10 md:mt-0 md:pr-10"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in building exceptional digital experiences with a focus on intuitive design and clean code. 
              Currently focused on creating accessible, user-friendly web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="./assets/john-doe-resume.pdf" 
                download
                className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300 shadow-md flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download mr-2"></i> Download Resume
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-2/5 flex justify-center"
            variants={itemVariants}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <svg
                className="w-full h-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-16 flex justify-center space-x-6"
          variants={itemVariants}
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            className="text-gray-700 hover:text-primary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            className="text-gray-700 hover:text-primary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            className="text-gray-700 hover:text-primary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a 
            href="mailto:john.doe@example.com" 
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
