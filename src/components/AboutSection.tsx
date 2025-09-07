const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="fade-in-up">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm an Information Technology undergraduate with a passion for software development, web technologies, and project management. I enjoy learning new technologies, solving real-world problems, and working on creative projects that make an impact.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="skill-card text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="font-semibold mb-2">Traveling</h3>
                  <p className="text-sm text-muted-foreground">Exploring cultures and gaining global perspectives</p>
                </div>
                
                <div className="skill-card text-center">
                  <div className="text-4xl mb-3">💃</div>
                  <h3 className="font-semibold mb-2">Dancing</h3>
                  <p className="text-sm text-muted-foreground">Expressing creativity through movement and rhythm</p>
                </div>
                
                <div className="skill-card text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <h3 className="font-semibold mb-2">Music</h3>
                  <p className="text-sm text-muted-foreground">Finding inspiration and relaxation through melodies</p>
                </div>
                
                <div className="skill-card text-center">
                  <div className="text-4xl mb-3">🍰</div>
                  <h3 className="font-semibold mb-2">Baking</h3>
                  <p className="text-sm text-muted-foreground">Creating delicious treats with precision and love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;