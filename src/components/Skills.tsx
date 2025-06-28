import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // const skillsData = [
  //   {
  //     year: '2021',
  //     title: 'Programming Foundations',
  //     skills: ['C', 'C++', 'Basic Java', 'Problem Solving'],
  //     description: 'Started my programming journey with core languages and algorithmic thinking during my first year of B.Tech.',
  //     color: 'from-blue-500 to-cyan-500'
  //   },
  //   {
  //     year: '2022',
  //     title: 'Web Development Basics',
  //     skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
  //     description: 'Learned web fundamentals and version control systems. Built my first static websites and discovered my passion for frontend development.',
  //     color: 'from-purple-500 to-pink-500'
  //   },
  //   {
  //     year: '2023',
  //     title: 'Frontend Frameworks & Design',
  //     skills: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Figma'],
  //     description: 'Mastered modern frontend development with React and utility-first CSS. Started exploring UI/UX design principles and tools.',
  //     color: 'from-green-500 to-teal-500'
  //   },
  //   {
  //     year: '2024',
  //     title: 'Backend & Database Integration',
  //     skills: ['Supabase', 'Firebase', 'SQL', 'API Integration'],
  //     description: 'Expanded to backend services and database management. Built full-stack applications with real-time features.',
  //     color: 'from-orange-500 to-red-500'
  //   },
  //   {
  //     year: '2024',
  //     title: 'Advanced UI/UX & Tools',
  //     skills: ['Advanced Figma', 'User Research', 'Prototyping', 'Design Systems'],
  //     description: 'Deepened my UI/UX expertise with advanced design tools, user research methodologies, and design system creation.',
  //     color: 'from-indigo-500 to-purple-500'
  //   },
  //   {
  //     year: '2025',
  //     title: 'Professional Development',
  //     skills: ['Full Stack Development', 'Project Management', 'Team Collaboration', 'Industry Best Practices'],
  //     description: 'Graduated with comprehensive skills in full-stack development, ready to contribute to professional projects and teams.',
  //     color: 'from-pink-500 to-rose-500'
  //   }
  // ];

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'Java (Basic)', level: 60 },
        { name: 'SQL', level: 75 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'User Research', level: 75 },
        { name: 'Prototyping', level: 80 },
        { name: 'Design Systems', level: 70 }
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Supabase', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 95 }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Skills & Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My evolution from a curious beginner to a skilled frontend developer and UI/UX designer
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'animate-pulse' : ''
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1.5s ease-out ${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        
      </div>
    </section>
  );
};

export default Skills;