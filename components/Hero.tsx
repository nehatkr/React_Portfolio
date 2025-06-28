import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="text-white space-y-8 lg:order-1" variants={itemVariants}>
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-sm font-medium text-cyan-300"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋 Hello, I'm
                </motion.span>
              </motion.div>
              
              <motion.div className="space-y-4" variants={titleVariants}>
                <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  <motion.span 
                    className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Neha
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    Kumari
                  </motion.span>
                </h1>
                
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-300 relative z-10">
                    Frontend Developer & UI/UX Designer
                  </h2>
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-lg font-light"
              variants={itemVariants}
            >
              B.Tech Computer Science Engineering graduate (2025) passionate about creating 
              beautiful, user-friendly web applications. Specializing in React.js, modern frontend 
              technologies, and intuitive UI/UX design.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold backdrop-blur-sm"
                whileHover={{ 
                  borderColor: "rgba(255,255,255,1)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-6 pt-8"
              variants={itemVariants}
            >
              <motion.a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Github size={24} className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Linkedin size={24} className="text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Mail size={24} className="text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:order-2 flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Glowing rings */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110"
                animate={{
                  scale: [1.1, 1.2, 1.1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-40 scale-105"
                animate={{
                  scale: [1.05, 1.15, 1.05],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/myPicture (1).jpg"
                  alt="Neha Kumari - Frontend Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-2"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;