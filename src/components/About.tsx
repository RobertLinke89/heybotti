
const About = () => {
  return (
    <section id="about" className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-raleway">
            How we <span className="text-primary">approach</span> it
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our structured approach for sustainable automation solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 01 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">01</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  Analysis & Goal Definition
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Thorough analysis of existing processes and definition of clear goals. We identify time-consuming, error-prone tasks and determine whether time should be saved, errors reduced, or scalability increased.
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">02</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  Tool Selection & Technology
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Selection of suitable tools and technologies for existing systems. Whether RPA, low-code platforms or API integrations – we focus on user-friendly, secure and scalable solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">03</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  Implementation & Testing Phase
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Technical implementation with small pilot process. Automation, testing with real data and valuable employee feedback for early optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className="group p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-primary font-semibold text-lg">04</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-raleway">
                  Rollout & Optimization
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Go-live with team training and transparent communication. Continuous reviews and extensions ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
