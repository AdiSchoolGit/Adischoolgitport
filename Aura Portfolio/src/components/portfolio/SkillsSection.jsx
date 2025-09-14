import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Server,
  Cloud,
  Wrench
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    skills: ["SwiftUI", "React.js", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Backend", 
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Java", "C++", "PHP", "Node.js"]
  },
  {
    title: "Databases & Cloud",
    icon: Cloud, 
    color: "from-purple-500 to-pink-500",
    skills: ["Firebase", "Microsoft Azure", "SQL", "NoSQL"]
  },
  {
    title: "Tools & Other",
    icon: Wrench,
    color: "from-orange-500 to-red-500", 
    skills: ["AutoCAD", "Git", "Docker", "REST APIs"]
  }
];

const professionalSkills = [
  "Full-Stack Development",
  "Software Testing & QA",
  "Data Analysis",
  "Agile Methodologies",
  "Team Coordination",
  "Network Protocols (OSPF, BGP)",
  "Problem Solving"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through hands-on experience, 
            continuous learning, and passion for creating exceptional digital solutions.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Professional Skills */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="flex flex-wrap gap-3 justify-center">
                    {professionalSkills.map((skill) => (
                      <Badge key={skill} className="text-base px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
              </CardContent>
            </Card>
          </motion.div>

      </div>
    </section>
  );
}