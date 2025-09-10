import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Cog, 
  Network, 
  Shield, 
  Server, 
  CreditCard,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies",
    features: ["React/Vue.js Frontend", "Node.js/Python Backend", "Database Design", "API Development", "Mobile Responsive", "SEO Optimized"],
    price: "Starting at $2,500"
  },
  {
    icon: Cog,
    title: "Business Automation",
    description: "Streamline workflows and eliminate manual processes with intelligent automation",
    features: ["Process Analysis", "Workflow Design", "API Integrations", "Data Migration", "Training & Support", "ROI Tracking"],
    price: "Starting at $1,800"
  },
  {
    icon: Network,
    title: "Network Management",
    description: "Secure, scalable network infrastructure for modern businesses",
    features: ["Network Design", "WiFi Setup", "VPN Configuration", "Monitoring Tools", "Performance Optimization", "24/7 Support"],
    price: "Starting at $3,200"
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive cybersecurity to protect your digital assets",
    features: ["Security Audits", "Firewall Setup", "Threat Detection", "Data Encryption", "Compliance Consulting", "Incident Response"],
    price: "Starting at $2,800"
  },
  {
    icon: Server,
    title: "Server Setup",
    description: "Reliable server infrastructure with enterprise-grade performance",
    features: ["Cloud/On-Premise Setup", "Load Balancing", "Backup Solutions", "Monitoring", "Scaling Strategy", "99.9% Uptime SLA"],
    price: "Starting at $2,200"
  },
  {
    icon: CreditCard,
    title: "Payout Integration",
    description: "Seamless payment processing and financial system integration",
    features: ["Payment Gateway Setup", "Multi-Currency Support", "Fraud Protection", "Compliance (PCI DSS)", "Real-time Analytics", "Customer Support"],
    price: "Starting at $1,500"
  }
];

const stats = [
  { icon: Users, label: "Clients Served", value: "500+" },
  { icon: CheckCircle, label: "Projects Completed", value: "1,200+" },
  { icon: Clock, label: "Support Response", value: "< 2hrs" },
  { icon: Zap, label: "Uptime Guarantee", value: "99.9%" }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Your Last Stop to Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            SVINTECH is your last stop to automation and IT excellence. From websites to workflow automation, 
            secure networks to payouts, we cover it all with our security-first approach.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                  <CardDescription className="mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote">
                    <Button 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      data-testid={`button-quote-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <Card className="bg-muted/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold font-[Montserrat] mb-4">Need Something Else?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expertise extends beyond these core services. We provide custom solutions for unique business challenges, 
              from IoT implementations to AI integrations and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" size="lg" data-testid="button-discuss-needs">
                  Discuss Your Needs
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" data-testid="button-custom-quote">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}