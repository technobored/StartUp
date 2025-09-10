import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin,
  Clock,
  Send
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "hello@svintech.com",
    action: "mailto:hello@svintech.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    value: "+1 (555) 123-4567", //todo: remove mock functionality
    action: "tel:+15551234567"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat on WhatsApp",
    value: "Message us directly",
    action: "#" //todo: remove mock functionality
  },
  {
    icon: MapPin,
    title: "Global Reach",
    description: "Worldwide service",
    value: "Remote & On-site",
    action: null
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name} field updated:`, value); // Interactive feedback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission //todo: remove mock functionality
    console.log("Form submission triggered", formData);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting SVINTECH. We'll respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Let's Start Your Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our team and let's discuss your automation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className={method.action ? "hover-elevate cursor-pointer" : ""}>
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-sm font-medium" data-testid={`text-${method.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="pt-2 text-sm text-muted-foreground">
                  * Emergency support available 24/7 for enterprise clients
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-muted-foreground mb-4">
                  We typically respond to all inquiries within 2 hours during business hours, 
                  and within 24 hours on weekends.
                </p>
                <Badge variant="secondary">
                  Average Response: &lt; 2 hours
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}