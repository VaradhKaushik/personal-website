import FadeInSection from "./FadeInSection";
import { resumeData } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <FadeInSection key={index}>
              <div className={`mb-${index === resumeData.education.length - 1 ? '0' : '12'}`}>
                <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
                  <div className={`md:w-1/4 ${edu.bgColor} text-white p-6 flex flex-col justify-center items-center`}>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className={edu.dateColor}>{edu.period}</p>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.field}</h4>
                    <p className="text-gray-300 mb-4">{edu.institution}</p>
                    <p className="text-gray-300">
                      {edu.description}
                    </p>
                    <div className="mt-4">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <span key={achievementIndex} className="inline-block bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                          {achievement}
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
