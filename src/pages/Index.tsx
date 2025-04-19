
import { useState } from "react";
import { Quiz } from "@/components/quiz/Quiz";

const Index = () => {
  const [completed, setCompleted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | undefined>();

  const handleQuizComplete = (url?: string) => {
    setCompleted(true);
    setRedirectUrl(url);
    
    // Optionally redirect to sales page
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bloom-lavender/30 to-bloom-peach/30">
      <header className="py-6 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-bloom-purple">Bloom Wellness</h1>
      </header>
      
      <main className="pb-12">
        <Quiz onComplete={handleQuizComplete} />
      </main>
      
      <footer className="py-4 px-4 text-center text-sm text-gray-500">
        <p>© 2025 Bloom Wellness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
