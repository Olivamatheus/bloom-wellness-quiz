
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 quiz-gradient rounded-2xl shadow-lg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-bloom-purple">
          Bloom Wellness Quiz
        </h1>
        
        <p className="text-lg mb-8 text-gray-700">
          Discover your unique wellness profile and unlock personalized insights to help you thrive in all areas of your life.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-bloom-lavender flex items-center justify-center text-bloom-purple font-bold">
              1
            </div>
            <p className="ml-4 text-left text-gray-700">18 simple questions about your wellness journey</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-bloom-peach flex items-center justify-center text-bloom-purple font-bold">
              2
            </div>
            <p className="ml-4 text-left text-gray-700">Receive your personalized wellness profile</p>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-bloom-pink flex items-center justify-center text-bloom-purple font-bold">
              3
            </div>
            <p className="ml-4 text-left text-gray-700">Get custom recommendations for your journey</p>
          </div>
        </div>
        
        {!isReady ? (
          <Button 
            onClick={() => setIsReady(true)}
            className="text-lg px-8 py-6 rounded-full bg-bloom-purple hover:bg-purple-600 transition-all shadow-md hover:shadow-lg"
          >
            Take the Quiz
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-bloom-purple">Ready to discover your wellness profile?</h3>
            <p className="mb-6 text-gray-600">This quiz takes about 5 minutes to complete. Your answers help us create a personalized wellness journey just for you.</p>
            <Button 
              onClick={onStart}
              className="w-full text-lg px-8 py-6 rounded-full bg-bloom-purple hover:bg-purple-600 transition-all"
            >
              Let's Begin
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
