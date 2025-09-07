import { Download, FileText } from 'lucide-react';

const ResumeSection = () => {
  const downloadResume = () => {
    // This would link to the actual PDF resume
    console.log('Download resume functionality');
    // In a real implementation, this would trigger a download
    // window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="section-container bg-muted/50">
      <div className="fade-in-up">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">Download my complete professional profile</p>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="skill-card">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Resume</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get a comprehensive overview of my education, experience, skills, and projects. 
                My resume includes detailed information about my academic achievements, 
                technical competencies, and professional journey in IT.
              </p>
            </div>
            
            <button
              onClick={downloadResume}
              className="btn-gradient inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <Download className="h-6 w-6" />
              Download My Resume
            </button>
            
            <p className="text-sm text-muted-foreground mt-4">
              PDF format • Updated regularly • Professional layout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;