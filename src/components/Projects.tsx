import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Deployment of Java Application to Amazon EKS – Fully Automated CI/CD Pipeline",
      period: "2025",
      description: "Designed a CI/CD pipeline on GitHub Actions, minimizing manual deployment time by 70%. Containerized the application using Docker, pushed images to Amazon ECR, and managed deployments with Kubernetes manifests on EKS.",
      highlights: [
        "Designed a CI/CD pipeline on GitHub Actions, minimizing manual deployment time by 70%",
        "Containerized the application using Docker, pushed images to Amazon ECR",
        "Managed deployments with Kubernetes manifests on EKS",
        "Monitored application logs and performance using kubectl, CloudWatch Logs, Prometheus, and Grafana dashboards for real-time metrics and alerting"
      ],
      techStack: ["Docker", "Kubernetes", "Amazon EKS", "AWS", "GitHub Actions", "Prometheus", "Grafana", "Ubuntu Linux"],
      type: "CI/CD Pipeline",
      status: "Completed"
    },
    {
      title: "Realtime Portfolio Deployment on ECS – Fully Automated DevOps Pipeline",
      period: "2025",
      description: "Deployed a fully automated personal portfolio website using AWS and DevOps tools with production-grade scalability, integrated metrics, and centralized log monitoring.",
      highlights: [
        "Set up a CI/CD automation using GitHub Actions integrating Trivy security scans, SonarQube analysis, and ECS-based container deployment",
        "Developed a serverless backend using API Gateway, Lambda, DynamoDB, and SNS for contact form data handling and notifications",
        "Achieved production-grade scalability with integrated metrics",
        "Implemented centralized log monitoring"
      ],
      techStack: ["AWS", "Docker", "GitHub Actions", "Trivy", "SonarQube", "ECS", "API Gateway", "Lambda", "DynamoDB", "SNS"],
      type: "DevOps Pipeline",
      status: "Completed"
    },
    {
      title: "LLM-Powered Audio Product Review Bot – AudioAdvisor",
      period: "2025",
      description: "Implemented a CI/CD pipeline with GitHub Actions, automating builds, tests, and production deployments, reducing manual deployment time by 70%. Enabled instant user responses from the AI chatbot for product recommendations.",
      highlights: [
        "Implemented a CI/CD pipeline with GitHub Actions, automating builds, tests, and production deployments",
        "Reduced manual deployment time by 70%",
        "Enabled instant user responses from the AI chatbot, ensuring a seamless, low-latency experience for product recommendations and comparisons",
        "Set up end-to-end monitoring with Prometheus and Grafana, improving system observability and alerting by 80%"
      ],
      techStack: ["AWS EKS", "ECR", "ALB", "Route 53", "ACM", "GitHub Actions", "Docker", "Prometheus", "Grafana"],
      type: "AI Application",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CI/CD Pipeline':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DevOps Pipeline':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'AI Application':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications of cloud technologies and infrastructure solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-large transition-all duration-300 border-0 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge 
                      variant="outline" 
                      className={`border ${getTypeColor(project.type)}`}
                    >
                      {project.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`border ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl text-foreground mb-3">
                  {project.title}
                </CardTitle>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-primary text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-medium border-0 bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in My Work?
              </h3>
              <p className="text-white/90 mb-6">
                Let's discuss how I can help build scalable cloud solutions for your next project.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;