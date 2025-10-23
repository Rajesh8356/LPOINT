import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of AI technology to solve real-world business challenges."
    },
    {
      icon: Users,
      title: "People-First",
      description: "Empowering organizations and individuals through intelligent technology solutions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering cutting-edge solutions with the highest standards of quality and reliability."
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building long-term partnerships through transparency, security, and proven results."
    }
  ];

  const achievements = [
    { metric: "100+", label: "Custom AI Projects" },
    { metric: "500+", label: "Satisfied Clients" },
    { metric: "99.9%", label: "Client Satisfaction" },
    { metric: "24/7", label: "AI Support Available" }
  ];

 

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About LPOINT
          </h2>
          <p className="text-xl text-muted-foreground">
            Since 2020, LPOINT specializes in building custom AI solutions using cutting-edge Generative AI technology. 
            We transform your unique business challenges into intelligent, automated solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-ai-gradient rounded-2xl p-12 text-center mb-16 shadow-ai animate-scale-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
            To create custom AI solutions that perfectly match each client's unique requirements using state-of-the-art 
            Generative AI technology. We believe every business deserves AI solutions built specifically for their needs, 
            not one-size-fits-all products.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card-gradient border-0 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Impact
            </h3>
            <p className="text-lg text-muted-foreground">
              Trusted by organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-8 bg-card-gradient border-0 shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
