import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="p-12">
            <div className="text-8xl font-bold text-accent mb-4">404</div>
            <h1 className="text-2xl lg:text-3xl font-bold font-[Montserrat] mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              Perhaps you'd like to go back to our homepage or explore our services?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" data-testid="button-go-home">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" data-testid="button-view-services">
                  <Search className="mr-2 h-4 w-4" />
                  View Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Need help? <Link href="/contact" className="text-accent hover:underline">Contact our team</Link> 
                {" "}and we'll get you to the right place.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}