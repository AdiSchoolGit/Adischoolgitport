import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
      
      <motion.div
        className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        animate={{
          x: [-20, 20, -20],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
        style={{ top: '15%', left: '25%' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        animate={{
          x: [30, -30, 30],
          y: [-20, 20, -20],
          scale: [1, 0.9, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut",
          delay: 5
        }}
        style={{ bottom: '15%', right: '25%' }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Aditya Jasti
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Sophomore at San Diego State University, pursuing a B.S. in Computer Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>
            <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c7230ba0b0853fa1f10751/7c0c5e180_Adiresumesubm.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-lg rounded-full transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <a 
              href="https://github.com/Adityaj7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ajasti-69420ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a 
              href="mailto:ajasti7720@sdsu.edu"
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}