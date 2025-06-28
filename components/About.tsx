import React from 'react';
import { Code, Palette, Zap, GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive, interactive web applications with React.js and modern technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces with attention to user experience"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Analytical thinking and efficient solutions to complex development challenges"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Dr. APJ Abdul Kalam Women's Institute of Technology",
      location: "Darbhanga, Bihar",
      duration: "2021 - 2025",
      grade: "8.66 CGPA",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Mohini Devi Memorial School",
      location: "Araria, Bihar",
      duration: "2018 - 2020",
      grade: "81%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Secondary Education",
      institution: "Kiran Public School",
      location: "Madhepura, Bihar",
      duration: "2017 - 2018",
      grade: "68.9%",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600">Neha Kumari</span>, a passionate 
              Frontend Developer and UI/UX Designer. I recently graduated in 2025 with a B.Tech in 
              Computer Science Engineering from Dr. APJ Abdul Kalam Women's Institute of Technology 
              with an impressive 8.66 CGPA.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in technology began with curiosity about how beautiful digital experiences 
              are created. I specialize in building responsive web applications using React.js and 
              designing intuitive user interfaces that solve real-world problems. I'm passionate 
              about the intersection of technology and design.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in creating digital solutions that are not only functional but also 
              aesthetically pleasing and user-friendly. My goal is to bridge the gap between 
              design and development to create exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind', 'UI/UX Design', 'Figma', 'C/C++', 'SQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                  {edu.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <span className="text-lg font-semibold text-blue-600">{edu.grade}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-1">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                    <span>{edu.location}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;