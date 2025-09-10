import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, FileText, BookOpen, MessageCircle, Utensils, SchoolIcon } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Forecasting Website",
      description: "Developed a responsive website for weather forecasting using HTML, CSS, and JavaScript. Integrated an API to fetch real-time weather data for global cities. Designed an intuitive user interface to display weather information like temperature, humidity, and wind speed. Enhanced website performance by optimizing JavaScript code for faster data retrieval and rendering.",
      technologies: ["HTML", "CSS", "Java-Script", "Api"],
      icon: FileText,
      category: "Web Application",
      features: ["Accurate Pediction with MAX & MIN Tempreture", "Wind Speed", "Humidity", "Advance Prediction Upto 4-Days", "Only Accepts Place-name"],
      githubUrl: "https://github.com/Biswajit8280/Weather-forecasting",
      liveUrl: "https://biswajit8280.github.io/Weather-forecasting/"
    },
    {
      title: "Messaging Application (Android)",
      description: "Designed and implemented an Android messaging application using XML for UI design and Java for backend logic. Included features like user authentication, sending and receiving messages, and real-time notifications. Focused on creating a user-friendly interface and ensuring seamless app functionality across devices. Tested the application on multiple Android versions to ensure compatibility. ",
      technologies: ["Java", "Xml", "Android Studio", "Firebase"],
      icon: MessageCircle,
      category: "Android Application",
      features: ["Real-time Communication", "Gesture Recognition", "Message Tracking", "Profile Optimisation"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Student Association Platform For The University ",
      description: "Implemented secure login using college email verification. Designed a responsive UI with sections for posts, study materials, notices, and timetables. Enabled user profiles, posting, liking, commenting, following, and club registration. Integrated Supabase for real-time database operations and authentication.",
      technologies: ["Next.js", "Tailwind CSS", "V0.dev", "React","Supabase"],
      icon: SchoolIcon,
      category: "Web Application",
      features: ["Anonymous Chat", "Real-time Messaging", "Video Calls", "User Authentication ( only collage mail id )", "Profile Management", "Post Shearing","Material Shearing"],
      githubUrl: "https://github.com/Biswajit8280/v0-university-social-network-6th-sem",
      liveUrl: "https://v0-university-social-network.vercel.app/"
    },
    {
      title: "NutriMate: Dietary Recommender",
      description: "A cutting-edge research project utilizing deep learning algorithms to provide personalized dietary recommendations based on individual lifestyle patterns and health metrics. This system analyzes user data to suggest optimal nutrition plans.",
      technologies: ["Deep Learning", "Python", "TensorFlow", "Data Analysis", "Health Tech"],
      icon: Utensils,
      category: "Research Project",
      features: ["Personalized Recommendations", "Health Metrics Analysis", "Lifestyle Assessment", "Nutrition Planning", "ML Algorithms"],
      githubUrl: "https://github.com/yourusername/nutrimate-ai",
      liveUrl: "https://nutrimate-demo.herokuapp.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my portfolio of innovative projects spanning mobile development, AI applications, 
            web platforms, and research initiatives that showcase my technical expertise and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="bg-card-gradient shadow-subtle hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-scale-in group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex items-center space-x-2 hover:scale-105 transition-transform"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center space-x-2 hover:scale-105 transition-transform"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-card-gradient shadow-medium max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Stay tuned for more innovative solutions and creative applications!
              </p>
              <Button 
                variant="default"
                className="hover:scale-105 transition-transform"
                onClick={() => window.open('https://github.com/Biswajit8280', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View All on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;