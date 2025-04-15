import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { resumeData } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="projects" className="section py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <FadeInSection key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
              >
                <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors duration-300 font-medium flex items-center">
                      <span>View Demo</span>
                      <i className="fas fa-external-link-alt ml-1"></i>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors duration-300 font-medium flex items-center">
                      <span>GitHub</span>
                      <i className="fab fa-github ml-1"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a 
            href="https://github.com/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            <span>View All Projects on GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
