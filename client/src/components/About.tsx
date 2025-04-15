import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="section py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am a passionate software engineer with over 5 years of experience in developing robust web applications. 
              My journey in technology started when I built my first website at the age of 15, and I've been hooked ever since.
            </p>
          </FadeInSection>
          
          <FadeInSection>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code that scales well and provides an excellent user experience. 
              My technical expertise includes front-end development with React, back-end development with Node.js, 
              and database management with MongoDB and PostgreSQL.
            </p>
          </FadeInSection>
          
          <FadeInSection>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new recipes in the kitchen.
              I'm always open to new challenges and opportunities to grow both professionally and personally.
            </p>
          </FadeInSection>
          
          <FadeInSection>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-briefcase text-primary"></i>
                <span>Available for Freelance</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <i className="fas fa-language text-primary"></i>
                <span>English, Spanish</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
