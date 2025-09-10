import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Shield, 
  Lightbulb, 
  Users, 
  TrendingUp,
  Linkedin,
  Mail,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const values = [
  {
    icon: Shield,
    title: "Security-First Design",
    description: "Every solution we build prioritizes security from the ground up, ensuring your data and systems are protected."
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven Growth",
    description: "We leverage cutting-edge technologies and innovative approaches to drive sustainable business growth."
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Your success is our success. We work closely with you to understand and exceed your expectations."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, ensuring long-term value and adaptability."
  }
];

const team = [
  {
    name: "Lodrick Kibochi",
    role: "Founder & CEO", 
    image: "LK", // Using initials for now //todo: remove mock functionality
    description: "Visionary strategist driving automation and software innovation. Lodrick oversees growth, partnerships, and client relations, ensuring SVINTECH stays future-ready, global, and secure.",
    expertise: ["Strategy & Vision", "Business Development", "Client Relations", "Innovation Leadership"],
    linkedin: "#", //todo: remove mock functionality
    email: "lodrick@svintech.com" //todo: remove mock functionality
  },
  {
    name: "Lennox Odhiambo Otimbo",
    role: "Co-Founder & CTO",
    image: "LO", // Using initials for now //todo: remove mock functionality
    description: "Technical mastermind in networking, server setups, structured cabling, and system integration. Lennox leads infrastructure strategy with a security-first mindset.",
    expertise: ["Network Architecture", "Server Infrastructure", "System Integration", "Cybersecurity"],
    linkedin: "#", //todo: remove mock functionality
    email: "lennox@svintech.com" //todo: remove mock functionality
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About SVINTECH</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Last Stop to Your Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At SVINTECH, our mission is simple: to be the last stop to your automation needs. 
            We deliver secure, scalable, and innovative technology solutions that empower businesses, 
            institutions, and individuals to thrive in a digital-first world.
          </p>
        </div>

        {/* Mission & Philosophy */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-[Montserrat] mb-4">Our Philosophy</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We believe technology should be secure, accessible, and tailored to each client's unique needs. 
                  No one-size-fits-all solutions – just innovative approaches that deliver real results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-[Montserrat] mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dual-core leadership combining vision & growth with technical excellence & infrastructure mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {member.image}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{member.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="icon" data-testid={`button-linkedin-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" data-testid={`button-email-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center">
            <Globe className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold font-[Montserrat] mb-4">Global Technology Solutions</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              From small businesses to large enterprises, from local startups to international corporations, 
              SVINTECH serves clients worldwide with the same commitment to excellence and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button variant="outline" size="lg" data-testid="button-view-services">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" data-testid="button-start-conversation">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}