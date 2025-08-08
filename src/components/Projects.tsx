import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Search, Briefcase, Scissors, Film, X, CheckCircle, Clock, Star, Code, Database, Zap, BookOpen } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'HireSpace (JobConnect Website)',
      description: 'A comprehensive job portal enabling users to create job posts, apply for positions, track hiring status, and save jobs. Features seamless recruiter functionality for posting, updating, and deleting job openings.',
      detailedDescription: 'HireSpace is a full-featured job portal that bridges the gap between job seekers and recruiters. The platform provides a comprehensive solution for modern hiring needs with an intuitive interface and powerful backend capabilities.',
      image: '/Screenshot 2025-07-11 093114.png',
      technologies: ['React.js', 'shadcn/ui', 'Tailwind CSS', 'Clerk Auth', 'Supabase'],
      liveUrl: 'https://hire-space-orpin.vercel.app/',
      githubUrl: 'https://github.com/nehatkr/HireSpace',
      status: 'COMPLETED',
      date: 'Apr 2024',
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        'Job posting and application system',
        'Hiring status tracking',
        'Save jobs for later functionality',
        'Recruiter dashboard',
        'Authentication with Clerk'
      ],
      detailedFeatures: [
        {
          title: 'User Authentication & Management',
          description: 'Secure sign-up and login system using Clerk.Supports session-based auth and role-based access (candidate/employer)',
          icon: <Briefcase className="w-5 h-5" />
        },
        {
          title: 'Modern Frontend UI',
          description: 'Built with React.js, providing a seamless single-page application experience. Fully responsive design for desktop,and mobile.Clean, professional UI for a job-seeking platform',
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: 'Job Posting System (for Employers)',
          description: 'Employers can create, update, and delete job listings.Include job title, description, category, salary, location, and skills required',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Job Search & Filters (for Candidates)',
          description: 'Smart job search functionality. Filter by job title, company, location, and category',
          icon: <Zap className="w-5 h-5" />
        }
      ],
      challenges: [
        'Designing relational tables and handling real-time updates required a deep understanding of Supabases structure and queries.',
        'Designing scalable database schema for complex job-candidate relationships',
        'Creating responsive UI that works seamlessly across all devices'
      ],
      learnings: [
        'Advanced React patterns and state management',
        'Supabase real-time subscriptions and RLS policies',
        'User experience design for complex workflows'
      ],
      metrics: {
        'Lines of Code': '15,000+',
        'Components': '45+',
        'Database Tables': '8',
        'Website Loading Time': '0.5ms'
      }
    },
    {
      title: 'Glowbook - SaaS Parlour Management',
      description: 'Full-stack SaaS platform for beauty parlours with subscription-based architecture, tiered pricing plans, and comprehensive business management tools including appointment scheduling and analytics.',
      detailedDescription: 'Glowbook revolutionizes beauty parlour management with a comprehensive SaaS solution. Built with modern web technologies, it offers subscription-based access to powerful business management tools.',
      image: '/Screenshot 2025-07-09 153519.png',
      technologies: ['React.js', 'Node.js', 'Firebase', 'Tailwind CSS', 'WhatsApp API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Spark-Mithila/GlowBook',
      status: 'OPEN',
      date: 'FEB 2025',
      icon: <Scissors className="w-6 h-6" />,
      features: [
        'Subscription-based pricing plans',
        'Appointment scheduling system',
        'Customer management',
        'WhatsApp integration',
        'Admin dashboard with analytics'
      ],
      detailedFeatures: [
        {
          title: 'Multi-tier Subscription System',
          description: 'Flexible pricing plans with feature-gated access, automated billing, and subscription management.',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Smart Appointment Scheduling',
          description: 'Drag-and-drop calendar interface with conflict detection, automated reminders, and staff allocation.',
          icon: <Calendar className="w-5 h-5" />
        },
        {
          title: 'WhatsApp Business Integration',
          description: 'Automated appointment confirmations, reminders, and customer communication through WhatsApp API.',
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: 'Business Analytics Dashboard',
          description: 'Revenue tracking, customer insights, service performance metrics, and growth analytics.',
          icon: <Database className="w-5 h-5" />
        }
      ],
      challenges: [
        'Implementing complex subscription logic with feature gates',
        'Integrating WhatsApp Business API for automated communications',
        'Building scalable multi-tenant architecture'
      ],
      learnings: [
        'SaaS architecture patterns and subscription management',
        'Third-party API integration and webhook handling',
        'Business analytics and data visualization'
      ],
      metrics: {
        // 'Active Users': '500+',
        'Line Of Code': '20,000+',
        'Website  Loading Time': '0.3ms',
        // 'Customer Satisfaction': '4.8/5'
      }
    },
    {
      title: 'AI-Powered Movie Suggestion Website',
      description: 'Large-scale movie recommendation platform with AI-powered search using ChatGPT integration. Features Redux state management for movie data and comprehensive user authentication system.',
      detailedDescription: 'An intelligent movie discovery platform that leverages AI to provide personalized recommendations. Built with modern React architecture and integrated with ChatGPT for natural language movie queries.',
      image: '/Screenshot 2025-07-09 214558.png',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'ChatGPT API', 'Redux'],
      liveUrl: 'https://netflixgpt-rho-one.vercel.app/',
      githubUrl: 'https://github.com/nehatkr/netflix-gpt',
      status: 'COMPLETED',
      date: 'DEC 2024',
      icon: <Film className="w-6 h-6" />,
      features: [
        'AI-powered movie suggestions',
        'ChatGPT integration',
        'Redux state management',
        'User authentication',
        'Large-scale movie database'
      ],
      detailedFeatures: [
        {
          title: 'Natural Language Search',
          description: 'ChatGPT-powered search that understands complex queries like "funny movies like The Office but in space".',
          icon: <Search className="w-5 h-5" />
        },
        {
          title: 'Personalized Recommendations',
          description: 'Machine learning algorithms that learn from user preferences and viewing history.',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Advanced State Management',
          description: 'Redux toolkit implementation for efficient data flow and caching of movie information.',
          icon: <Code className="w-5 h-5" />
        },
        {
          title: 'Rich Movie Database',
          description: 'Integration with multiple movie APIs providing comprehensive film information and metadata.',
          icon: <Database className="w-5 h-5" />
        }
      ],
      challenges: [
        'Optimizing API calls to manage ChatGPT usage costs',
        'Implementing efficient caching strategies for large datasets',
        'Creating intuitive UI for complex search functionality'
      ],
      learnings: [
        'AI API integration and prompt engineering',
        'Advanced Redux patterns and middleware',
        'Performance optimization for large-scale applications'
      ],
      metrics: {
        'Movies in Database': '5,000+',
        'AI Queries Processed': '2,000+',
        'User Engagement': '85%',
        'Search Accuracy': '92%'
      }
    },
    {
      title: 'StudyStack - Academic Resource Sharing',
      description: 'Full-stack academic resource-sharing platform enabling 100+ students to upload, search, and download notes, PYQs, and syllabus documents with role-based authentication and real-time features.',
      detailedDescription: 'StudyStack is a comprehensive academic resource-sharing web application designed to streamline the process of sharing and accessing educational materials. Built with modern web technologies, it provides a secure and efficient platform for students to collaborate and share academic resources.',
      image: '/Screenshot 2025-08-06 101719.png',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'COMPLETED',
      date: 'AUG 2024',
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        'Role-based authentication system',
        'Document upload and management',
        'Advanced search and filtering',
        'Real-time comments and ratings',
        'Admin dashboard for approvals'
      ],
      detailedFeatures: [
        {
          title: 'Role-Based Authentication System',
          description: 'Three-tier user system (Viewer, Contributor, Admin) with Firebase Auth integration, providing secure access control and enhanced security.',
          icon: <Star className="w-5 h-5" />
        },
        {
          title: 'Contributor Application Workflow',
          description: 'Modal-based application system with data collection for roll numbers, batch, and semester details, plus admin dashboard for approval management.',
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          title: 'Real-time Document Management',
          description: 'Firebase Cloud Storage and Firestore integration for instant document storage, retrieval, and metadata management with real-time updates.',
          icon: <Database className="w-5 h-5" />
        },
        {
          title: 'Interactive User Features',
          description: 'Comment sections, rating systems, and contributor contact information to enhance user engagement and community interaction.',
          icon: <Zap className="w-5 h-5" />
        }
      ],
      challenges: [
        'Implementing secure role-based access control with Firebase Auth',
        'Building efficient search and filter functionality for large document collections',
        'Creating a seamless contributor approval workflow with real-time updates'
      ],
      learnings: [
        'Advanced Firebase services integration (Auth, Firestore, Storage)',
        'Role-based access control implementation and security best practices',
        'Real-time data synchronization and state management'
      ],
      metrics: {
        'Active Users': '100+',
        'Documents Shared': '500+',
        'Search Speed': '<5 seconds',
        'Uptime': '99.9%'
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'COMPLETED':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work combining frontend development and UI/UX design
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProject(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden lg:order-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600">
                    {project.icon}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Click to expand hint */}
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-white/90 text-sm font-medium">
                      <Search size={16} />
                      <span>Click to explore</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 lg:order-2 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-500 font-medium">{project.date}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full border border-blue-100 hover:border-blue-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">More Projects Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more exciting developments in frontend development and UI/UX design!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's Collaborate
              </a>
              <a
                href="#"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                <motion.div variants={contentVariants} initial="hidden" animate="visible">
                  {/* Header Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          {projects[selectedProject].icon}
                        </div>
                        <div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(projects[selectedProject].status)}`}>
                            {projects[selectedProject].status}
                          </span>
                          <p className="text-white/80 mt-1">{projects[selectedProject].date}</p>
                        </div>
                      </motion.div>
                      
                      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
                        {projects[selectedProject].title}
                      </motion.h2>
                      
                      <motion.p variants={itemVariants} className="text-xl text-white/90 leading-relaxed">
                        {projects[selectedProject].detailedDescription}
                      </motion.p>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Project Metrics */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                      {Object.entries(projects[selectedProject].metrics).map(([key, value], index) => (
                        <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                          <div className="text-sm text-gray-600">{key}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* Detailed Features */}
                    <motion.div variants={itemVariants} className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Features</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {projects[selectedProject].detailedFeatures.map((feature, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                {feature.icon}
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div variants={itemVariants} className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-3">
                        {projects[selectedProject].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Challenges & Learnings */}
                    <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Challenges Overcome</h3>
                        <ul className="space-y-3">
                          {projects[selectedProject].challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Learnings</h3>
                        <ul className="space-y-3">
                          {projects[selectedProject].learnings.map((learning, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                      <a
                        href={projects[selectedProject].liveUrl}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <ExternalLink size={20} />
                        <span>View Live Project</span>
                      </a>
                      <a
                        href={projects[selectedProject].githubUrl}
                        className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <Github size={20} />
                        <span>View Source Code</span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;