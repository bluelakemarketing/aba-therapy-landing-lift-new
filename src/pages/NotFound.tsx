
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 p-4">
      <div className="max-w-md w-full glass rounded-2xl p-8 shadow-lg text-center animate-scale">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
            <path d="M12 12h9"/>
            <path d="m16 8-4 4 4 4"/>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-6">Oops! The page you're looking for can't be found.</p>
        <Button 
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-5"
        >
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </a>
        </Button>
        <p className="mt-6 text-sm text-foreground/50">
          If you believe this is an error, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
