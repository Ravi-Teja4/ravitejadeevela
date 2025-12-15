import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ModernExperience = () => {
  const experiences = [
    {
      title: "Technical Intern",
      company: "CloudifyOps",
      period: "December 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      type: "Internship",
      responsibilities: [
        "Assist in the deployment, configuration, and management of applications on AWS Cloud services (EC2, S3, VPC, RDS, Lambda, EKS, etc.)",
        "Support DevOps practices, including CI/CD pipeline setup and automation using GitHub Actions, Jenkins, or similar tools",
        "Work with containerization and orchestration tools like Docker and Kubernetes (EKS)",
        "Monitor, troubleshoot, and optimize cloud infrastructure for performance, scalability, and security",
        "Manage and configure Linux servers, including package installation, system updates, and performance monitoring",
        "Assist in creating Infrastructure as Code (IaC) using Terraform or CloudFormation",
        "Collaborate with senior engineers to understand system architecture and implement best practices",
        "Document processes, configurations, and deployment steps for future reference",
        "Learn and apply cloud security, networking, and cost optimization strategies under guidance",
        "Execute realtime tasks to gain hands-on experience and contribute to live projects"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "EKS", "Terraform", "GitHub Actions", "Jenkins", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Hands-on experience in cloud infrastructure, automation, and DevOps practices
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Experience Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ willChange: 'transform' }}
              >
                <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                {/* Card gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {exp.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300" style={{ color: '#4DA3FF' }}>
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium mb-3" style={{ color: '#AFC6E9' }}>
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="transition-all duration-300 border-0"
                          style={{
                            backgroundColor: '#4DA3FF',
                            color: '#FFFFFF'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
            style={{ willChange: 'transform' }}
          >
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </Card>
          </motion.div>
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
            style={{ willChange: 'transform' }}
          >
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">AWS Services</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernExperience;