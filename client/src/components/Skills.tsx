import FadeInSection from "./FadeInSection";
import { resumeData } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <FadeInSection>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Technical Skills</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {resumeData.technicalSkills.map((skill, index) => (
                    <div key={index} className="p-3 bg-gray-700 rounded-lg flex items-center">
                      <div className="text-primary mr-2">
                        <i className="fas fa-code"></i>
                      </div>
                      <span className="text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
            
            {/* Professional Skills */}
            <FadeInSection>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Professional Skills</h3>
                
                <div className="grid grid-cols-2 gap-2">
                  {resumeData.professionalSkills.map((skill, index) => (
                    <div key={index} className="p-3 bg-gray-700 rounded-lg flex items-center">
                      <div className="text-primary mr-2">
                        <i className={skill.icon}></i>
                      </div>
                      <span className="text-white">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
