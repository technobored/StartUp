import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Calculator,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  { id: "web-dev", label: "Web Development", price: "Starting at $2,500" },
  { id: "automation", label: "Business Automation", price: "Starting at $1,800" },
  { id: "networking", label: "Network Management", price: "Starting at $3,200" },
  { id: "security", label: "Security Solutions", price: "Starting at $2,800" },
  { id: "servers", label: "Server Setup", price: "Starting at $2,200" },
  { id: "payments", label: "Payout Integration", price: "Starting at $1,500" },
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000", 
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000"
];

const timelines = [
  "ASAP (Rush job)",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "3+ months",
  "Flexible"
];

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name} field updated:`, value); // Interactive feedback
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(id => id !== serviceId)
    }));
    console.log(`Service ${serviceId} ${checked ? 'selected' : 'deselected'}`); // Interactive feedback
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name} selected:`, value); // Interactive feedback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Quote form submission triggered", formData);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Quote Request Submitted!",
        description: "Thank you for your interest. Our team will review your requirements and send a detailed quote within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        services: [],
        budget: "",
        timeline: "",
        description: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
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
          <Badge variant="outline" className="mb-4">Request a Quote</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Your Needs. Our Custom Solution.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every client is unique. At SVINTECH, the journey ends here — the last stop to your automation needs. 
            Tell us about your project and receive a tailored quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-6 w-6 text-accent" />
                  <span>Get Your Custom Quote</span>
                </CardTitle>
                <CardDescription>
                  Provide details about your project and we'll create a tailored solution for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          data-testid="input-quote-name"
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
                          data-testid="input-quote-email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          data-testid="input-quote-company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          data-testid="input-quote-phone"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Services Needed *</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            data-testid={`checkbox-${service.id}`}
                          />
                          <div className="space-y-1">
                            <Label htmlFor={service.id} className="font-medium cursor-pointer">
                              {service.label}
                            </Label>
                            <p className="text-sm text-muted-foreground">{service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                          <SelectTrigger data-testid="select-budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select onValueChange={(value) => handleSelectChange("timeline", value)} value={formData.timeline}>
                          <SelectTrigger data-testid="select-timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your project, goals, and what you're looking to achieve..."
                        rows={4}
                        required
                        data-testid="textarea-quote-description"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        placeholder="Any specific technical requirements, integrations, or constraints..."
                        rows={3}
                        data-testid="textarea-quote-requirements"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting || formData.services.length === 0}
                    data-testid="button-submit-quote"
                  >
                    {isSubmitting ? (
                      "Submitting Quote Request..."
                    ) : (
                      <>
                        Submit Quote Request
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Quick Response</p>
                    <p className="text-sm text-muted-foreground">
                      Detailed quote within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calculator className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Custom Pricing</p>
                    <p className="text-sm text-muted-foreground">
                      Tailored to your specific needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Security-First</p>
                    <p className="text-sm text-muted-foreground">
                      All solutions built with security priority
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Need to Discuss First?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to talk before submitting? We're here to help clarify your needs.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-sidebar-email">
                    <Calculator className="h-4 w-4 mr-2" />
                    hello@svintech.com
                  </Button>
                  <Button variant="outline" className="w-full justify-start" data-testid="button-sidebar-phone">
                    <Clock className="h-4 w-4 mr-2" />
                    +1 (555) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}