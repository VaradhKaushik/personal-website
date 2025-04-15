import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { resumeData } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {resumeData.experiences.map((experience, index) => (
            <FadeInSection key={index}>
              <div className={`mb-${index === resumeData.experiences.length - 1 ? '0' : '12'}`}>
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                  <div className={`md:w-1/4 ${experience.bgColor} text-white p-6 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className={experience.dateColor}>{experience.period}</p>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{experience.company}</h4>
                    <p className="text-gray-600 mb-4">{experience.location}</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
