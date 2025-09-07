import { Briefcase, Settings, Upload, Wrench } from 'lucide-react';

const ExperienceSection = () => {
  const responsibilities = [
    {
      title: 'HR Systems Configuration',
      description: 'Setting up and configuring HRIS systems to meet organizational needs',
      icon: Settings
    },
    {
      title: 'Project Setup Assistance',
      description: 'Supporting new project implementations and system integrations',
      icon: Briefcase
    },
    {
      title: 'System Troubleshooting',
      description: 'Diagnosing and resolving technical issues to maintain system efficiency',
      icon: Wrench
    },
    {
      title: 'Data Management',
      description: 'Managing data uploads and ensuring data integrity across systems',
      icon: Upload
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="fade-in-up">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">Building practical skills in the workplace</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="skill-card">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">Executive - HRIS Systems Implementation</h3>
                <p className="text-lg text-primary font-medium mb-4">Current Role</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Contributing to HR Information Systems implementation by providing technical support, 
                  system configuration, and data management services to streamline organizational processes.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-8">
              <h4 className="text-xl font-semibold mb-6">Key Responsibilities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <responsibility.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">{responsibility.title}</h5>
                      <p className="text-sm text-muted-foreground">{responsibility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;