import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Privacy Policy</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-[Montserrat] mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-muted-foreground">
            SVINTECH is committed to protecting your privacy and ensuring the security of your personal information.
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">GDPR Compliant</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Lock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Data Encryption</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <Eye className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">No Third-Party Sharing</h3>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <UserCheck className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm">User Control</h3>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <h4>Personal Information</h4>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Company information and job title</li>
                <li>Project requirements and technical specifications</li>
                <li>Communication preferences</li>
              </ul>
              
              <h4>Technical Information</h4>
              <ul>
                <li>IP address and browser information</li>
                <li>Website usage analytics (via privacy-compliant tools)</li>
                <li>Device information for technical support purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>We use your information solely for:</p>
              <ul>
                <li><strong>Service Delivery:</strong> Providing the technology solutions you've requested</li>
                <li><strong>Communication:</strong> Responding to inquiries and providing project updates</li>
                <li><strong>Support:</strong> Offering technical assistance and customer service</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and protecting our legal rights</li>
              </ul>
              
              <p><strong>We never:</strong></p>
              <ul>
                <li>Sell your personal information to third parties</li>
                <li>Use your data for advertising purposes</li>
                <li>Share information without your explicit consent (except as legally required)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security & Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>Security is at the core of everything we do. We protect your information through:</p>
              <ul>
                <li><strong>Encryption:</strong> All data transmitted and stored is encrypted using industry-standard protocols</li>
                <li><strong>Access Controls:</strong> Strict access limitations with multi-factor authentication</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Secure Infrastructure:</strong> Enterprise-grade hosting with 99.9% uptime and security monitoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights & Choices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>Under GDPR and other privacy regulations, you have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Ask us to correct any inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information (with certain exceptions)</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your data</li>
              </ul>
              
              <p>To exercise these rights, contact us at <strong>privacy@svintech.com</strong></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>We retain your personal information only as long as necessary for:</p>
              <ul>
                <li>Providing our services to you</li>
                <li>Complying with legal obligations</li>
                <li>Resolving disputes and enforcing agreements</li>
              </ul>
              
              <p>Typically, we retain:</p>
              <ul>
                <li><strong>Active clients:</strong> Data retained during active service relationship</li>
                <li><strong>Completed projects:</strong> 3 years for support and warranty purposes</li>
                <li><strong>Marketing contacts:</strong> Until you opt out or request deletion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies & Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>We use minimal, privacy-respecting cookies for:</p>
              <ul>
                <li><strong>Essential functionality:</strong> Website operation and security</li>
                <li><strong>Preferences:</strong> Remembering your settings (like dark mode)</li>
                <li><strong>Analytics:</strong> Understanding website usage (anonymized data only)</li>
              </ul>
              
              <p>You can control cookies through your browser settings. Disabling cookies may limit some website functionality.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Updates</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>For privacy-related questions or requests:</p>
              <ul>
                <li><strong>Email:</strong> privacy@svintech.com</li>
                <li><strong>Response time:</strong> Within 72 hours</li>
                <li><strong>Data Protection Officer:</strong> Available for GDPR-related inquiries</li>
              </ul>
              
              <p>We may update this privacy policy occasionally. We'll notify you of significant changes via email or website notice.</p>
              
              <p><strong>Last updated:</strong> January 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}