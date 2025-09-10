import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Clock, Users } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Terms of Service</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground">
            These terms govern your use of SVINTECH services and establish the framework for our professional relationship.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Clear Terms</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Fair Protection</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Timely Delivery</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Mutual Respect</h3>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Service Agreement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>By engaging SVINTECH for technology services, you agree to these terms. Our relationship is governed by:</p>
              <ul>
                <li><strong>Project Scope:</strong> Clearly defined deliverables and timelines</li>
                <li><strong>Communication:</strong> Regular updates and transparent progress reporting</li>
                <li><strong>Quality Standards:</strong> Enterprise-grade solutions with thorough testing</li>
                <li><strong>Security Focus:</strong> All work performed with security-first methodology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Project Payments</h4>
              <ul>
                <li><strong>Deposit:</strong> 50% due upon project commencement</li>
                <li><strong>Milestones:</strong> Progress payments as outlined in project agreement</li>
                <li><strong>Final Payment:</strong> Due within 30 days of project completion</li>
                <li><strong>Currency:</strong> All payments in USD unless otherwise agreed</li>
              </ul>
              
              <h4>Ongoing Services</h4>
              <ul>
                <li><strong>Monthly Services:</strong> Invoiced monthly, due within 15 days</li>
                <li><strong>Support Packages:</strong> Annual or monthly billing available</li>
                <li><strong>Late Payments:</strong> 1.5% monthly charge on overdue amounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Client Ownership</h4>
              <p>Upon full payment, clients own:</p>
              <ul>
                <li>Custom code developed specifically for their project</li>
                <li>Design assets created for their brand</li>
                <li>Documentation and training materials</li>
                <li>Data and content provided by or created for the client</li>
              </ul>
              
              <h4>SVINTECH Retains</h4>
              <ul>
                <li>General methodologies and best practices</li>
                <li>Reusable code frameworks and libraries</li>
                <li>Know-how and experience gained</li>
                <li>Rights to use project as portfolio reference (with client consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Warranties & Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Our Warranties</h4>
              <ul>
                <li><strong>Workmanship:</strong> 90-day warranty on all deliverables</li>
                <li><strong>Functionality:</strong> Solutions will perform as specified</li>
                <li><strong>Security:</strong> Code follows industry security standards</li>
                <li><strong>Support:</strong> Free bug fixes during warranty period</li>
              </ul>
              
              <h4>Limitations</h4>
              <ul>
                <li>Warranties don't cover third-party software or services</li>
                <li>Client modifications void warranties on modified components</li>
                <li>Force majeure events (natural disasters, etc.) may affect delivery</li>
                <li>Liability limited to project value or $10,000, whichever is less</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>We maintain strict confidentiality regarding:</p>
              <ul>
                <li><strong>Business Information:</strong> Your processes, strategies, and plans</li>
                <li><strong>Technical Data:</strong> System architectures, configurations, and credentials</li>
                <li><strong>Personal Information:</strong> Any personal data we encounter during service</li>
                <li><strong>Financial Data:</strong> Pricing, costs, and financial information</li>
              </ul>
              
              <p>Confidentiality obligations survive project completion and continue indefinitely unless information becomes publicly available through no fault of ours.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Changes & Cancellation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Scope Changes</h4>
              <ul>
                <li>Changes require written approval from both parties</li>
                <li>Additional work billed at agreed hourly rates</li>
                <li>Timeline adjustments made to accommodate changes</li>
                <li>Significant changes may require new project agreement</li>
              </ul>
              
              <h4>Cancellation Policy</h4>
              <ul>
                <li><strong>Client Cancellation:</strong> 30-day written notice required</li>
                <li><strong>Work Completed:</strong> Payment due for all completed work</li>
                <li><strong>Deliverables:</strong> Client receives work completed to date</li>
                <li><strong>Refunds:</strong> Unused deposits refunded minus completed work</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support & Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Included Support</h4>
              <ul>
                <li><strong>Bug Fixes:</strong> Free correction of defects for 90 days</li>
                <li><strong>Documentation:</strong> User guides and technical documentation</li>
                <li><strong>Basic Training:</strong> Initial user training sessions</li>
                <li><strong>Email Support:</strong> Technical questions during business hours</li>
              </ul>
              
              <h4>Extended Support</h4>
              <ul>
                <li>24/7 monitoring and support packages available</li>
                <li>Regular updates and security patches</li>
                <li>Performance optimization services</li>
                <li>Priority response for critical issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>In the unlikely event of disputes:</p>
              <ol>
                <li><strong>Direct Discussion:</strong> Good faith effort to resolve through communication</li>
                <li><strong>Mediation:</strong> Professional mediation if direct discussion fails</li>
                <li><strong>Arbitration:</strong> Binding arbitration as final resolution method</li>
                <li><strong>Governing Law:</strong> Disputes governed by laws of [Jurisdiction]</li>
              </ol>
              
              <p>We're committed to fair resolution and maintaining positive client relationships.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>For questions about these terms:</p>
              <ul>
                <li><strong>Email:</strong> legal@svintech.com</li>
                <li><strong>Business Inquiries:</strong> hello@svintech.com</li>
                <li><strong>Response Time:</strong> Within 48 hours for legal inquiries</li>
              </ul>
              
              <p>These terms may be updated periodically. Clients will be notified of material changes.</p>
              
              <p><strong>Last updated:</strong> January 2024</p>
              <p><strong>Effective date:</strong> For all new projects after January 1, 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}