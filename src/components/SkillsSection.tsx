import { Code, Database, Wrench, Users, Target, Clock } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Programming Languages', skills: ['C', 'Java'], icon: Code },
    { name: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript'], icon: Code },
    { name: 'Database Systems', skills: ['MySQL', 'DBMS'], icon: Database },
    { name: 'Development Tools', skills: ['GitHub', 'VS Code'], icon: Wrench },
  ];

  const softSkills = [
    { name: 'Leadership', description: 'Rotaract Club Experience', icon: Users },
    { name: 'Teamwork', description: 'Collaborative Problem Solving', icon: Users },
    { name: 'Problem-Solving', description: 'Analytical Thinking', icon: Target },
    { name: 'Time Management', description: 'Efficient Project Delivery', icon: Clock },
  ];

  return (
    <section id="skills" className="section-container bg-muted/50">
      <div className="fade-in-up">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and capabilities I work with</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((category, index) => (
                <div key={index} className="skill-card">
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-lg">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-card text-center">
                  <skill.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;