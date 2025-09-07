import { GraduationCap, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const electives = [
    'Advanced Database Systems',
    'Software Quality Assurance',
    'Data Mining & Analytics',
    'Game Development',
    'Process Mining',
    'Digital Business Models'
  ];

  return (
    <section id="education" className="section-container bg-muted/50">
      <div className="fade-in-up">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and learning journey</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="skill-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">BSc (Hons) in Information Technology</h3>
                <p className="text-lg text-secondary font-semibold mb-2">University of [Your University Name]</p>
                <p className="text-accent font-medium mb-4">Expected Graduation: 2027</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Focus Areas: Software Development, Databases, Web Technologies, and Project Management. Currently building comprehensive skills in modern development practices and industry-ready technologies.
                </p>
                
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Relevant Electives</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {electives.map((elective, index) => (
                      <div
                        key={index}
                        className="bg-primary/5 border border-primary/20 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {elective}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;