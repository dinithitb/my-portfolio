import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const project = {
    name: 'Thrift & Thrive',
    description: 'Minimalistic thrift store website designed for a smooth user shopping experience. Built with a focus on clean design and user-friendly navigation.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive design for all devices',
      'Clean and intuitive user interface',
      'Product catalog with search functionality',
      'User-friendly navigation system'
    ]
  };

  return (
    <section id="projects" className="section-container">
      <div className="fade-in-up">
        <h2 className="section-title">Featured Project</h2>
        <p className="section-subtitle">Showcasing my development work</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="skill-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Image Placeholder */}
              <div className="fade-in-up">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-xl font-semibold text-primary">Thrift & Thrive</h3>
                    <p className="text-muted-foreground">E-commerce Website</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="fade-in-up">
                <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </button>
                  <button className="btn-secondary inline-flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;