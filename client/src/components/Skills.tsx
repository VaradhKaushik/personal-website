import FadeInSection from "./FadeInSection";
import { resumeData } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <FadeInSection>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Technical Skills</h3>
                
                {resumeData.technicalSkills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full">
                      <div 
                        className="skill-bar bg-primary rounded-full h-2" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
            
            {/* Professional Skills */}
            <FadeInSection>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Professional Skills</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {resumeData.professionalSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="text-primary text-3xl mb-2">
                        <i className={skill.icon}></i>
                      </div>
                      <h4 className="text-gray-800 font-medium mb-1">{skill.name}</h4>
                      <div className="flex">
                        {[...Array(Math.floor(skill.rating))].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-400"></i>
                        ))}
                        {skill.rating % 1 === 0.5 && (
                          <i className="fas fa-star-half-alt text-yellow-400"></i>
                        )}
                        {[...Array(Math.floor(5 - skill.rating))].map((_, i) => (
                          <i key={i} className="far fa-star text-yellow-400"></i>
                        ))}
                      </div>
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
