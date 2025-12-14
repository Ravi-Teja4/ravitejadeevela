import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Cloud, Database, Shield, Code } from 'lucide-react';

const ModernProjects = () => {
  const projects = [
    {
      title: "Deployment of Java Application to Amazon EKS",
      description: "Designed a CI/CD pipeline on GitHub Actions, minimizing manual deployment time by 70%. Containerized the application using Docker, pushed images to Amazon ECR, and managed deployments with Kubernetes manifests on EKS.",
      technologies: ["Docker", "Kubernetes (Amazon EKS)", "AWS", "GitHub Actions", "Prometheus", "Grafana", "Ubuntu Linux"],
      features: [
        "CI/CD pipeline reducing deployment time by 70%",
        "Docker containerization with ECR image registry",
        "Kubernetes deployments on EKS",
        "Real-time monitoring with Prometheus and Grafana"
      ],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-primary to-secondary",
      delay: 0,
      url: "#"
    },
    {
      title: "Realtime Portfolio Deployment on ECS",
      description: "Deployed a fully automated personal portfolio website using AWS and DevOps tools with production-grade scalability, integrated metrics, and centralized log monitoring.",
      technologies: ["AWS", "Docker", "GitHub Actions", "Trivy", "SonarQube", "API Gateway", "Lambda", "DynamoDB", "SNS"],
      features: [
        "CI/CD with Trivy security scans and SonarQube analysis",
        "ECS-based container deployment",
        "Serverless backend with API Gateway and Lambda",
        "DynamoDB and SNS for contact form handling"
      ],
      icon: <Code className="h-8 w-8" />,
      gradient: "from-accent to-primary",
      delay: 200,
      url: "#"
    },
    {
      title: "LLM-Powered Audio Product Review Bot – AudioAdvisor",
      description: "Implemented a CI/CD pipeline with GitHub Actions, automating builds, tests, and production deployments, reducing manual deployment time by 70%.",
      technologies: ["AWS (EKS, ECR, ALB, Route 53, ACM)", "GitHub Actions", "Docker", "Prometheus", "Grafana"],
      features: [
        "CI/CD pipeline reducing deployment time by 70%",
        "Instant AI chatbot responses for product recommendations",
        "Low-latency user experience",
        "End-to-end monitoring improving observability by 80%"
      ],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-secondary to-accent",
      delay: 400,
      url: "#"
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#00008B' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Real-world cloud solutions showcasing expertise in AWS architecture, automation, and security
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-500 overflow-hidden border-2 border-border relative group bg-card">
                  {/* Removed gradient overlay for solid dark theme */}
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="p-3 rounded-2xl bg-primary text-white shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0">
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-card-foreground mb-3 text-sm">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: '#4DA3FF',
                              color: '#FFFFFF'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <div className="text-center pt-4">
                      <Button
                        asChild
                        className="rounded-lg px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary-light text-primary-foreground"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { value: "5+", label: "Cloud Projects", color: "primary" },
            { value: "15+", label: "AWS Services", color: "secondary" },
            { value: "100%", label: "IaC Adoption", color: "accent" },
            { value: "99.9%", label: "Uptime", color: "primary" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center p-6 shadow-medium hover:shadow-glow transition-all duration-300 border-t-4 border-t-primary bg-card">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernProjects;