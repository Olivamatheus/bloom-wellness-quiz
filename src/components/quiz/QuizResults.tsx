
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Result } from "@/types/quiz";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

interface QuizResultsProps {
  result: Result;
  onRestart: () => void;
  onContinue: () => void;
}

export function QuizResults({ result, onRestart, onContinue }: QuizResultsProps) {
  const [showMetrics, setShowMetrics] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  
  useEffect(() => {
    const metricsTimer = setTimeout(() => setShowMetrics(true), 1000);
    const recommendationsTimer = setTimeout(() => setShowRecommendations(true), 2000);
    
    return () => {
      clearTimeout(metricsTimer);
      clearTimeout(recommendationsTimer);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-xl"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-bloom-purple">Your Wellness Profile</h2>
          <p className="text-gray-600 mt-2">Based on your responses, we've identified your unique profile</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row gap-6 mb-8"
      >
        <div className="flex-shrink-0">
          <img 
            src={result.profile.imageUrl} 
            alt={result.profile.title} 
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-bloom-lavender shadow-md mx-auto md:mx-0"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-bloom-purple text-center md:text-left">{result.profile.title}</h3>
          <p className="text-gray-700 mt-3">{result.profile.description}</p>
        </div>
      </motion.div>
      
      <Separator className="my-6" />
      
      {showMetrics && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-8 space-y-6"
        >
          <h3 className="text-xl font-semibold text-bloom-purple">Your Wellness Metrics</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Energy Level</span>
                <span className="text-bloom-purple font-semibold">{result.energyLevel}/10</span>
              </div>
              <Progress value={result.energyLevel * 10} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Mental Strength</span>
                <span className="text-bloom-purple font-semibold">{result.mentalStrength}/10</span>
              </div>
              <Progress value={result.mentalStrength * 10} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Balance Score</span>
                <span className="text-bloom-purple font-semibold">{result.balanceScore}/10</span>
              </div>
              <Progress value={result.balanceScore * 10} className="h-2" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-bloom-lavender/20 p-4 rounded-lg">
              <h4 className="font-semibold text-bloom-purple mb-2">Your Strengths</h4>
              <ul className="space-y-2 pl-5 list-disc">
                {result.profile.strengths.map((strength, index) => (
                  <li key={index} className="text-gray-700">{strength}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-bloom-peach/20 p-4 rounded-lg">
              <h4 className="font-semibold text-bloom-purple mb-2">Focus Areas</h4>
              <ul className="space-y-2 pl-5 list-disc">
                {result.profile.focusAreas.map((area, index) => (
                  <li key={index} className="text-gray-700">{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
      
      {showRecommendations && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold text-bloom-purple mb-4">Your Personalized Recommendations</h3>
          
          <div className="space-y-3">
            {result.recommendations.map((recommendation, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-bloom-mint/30 to-bloom-blue/30 p-4 rounded-lg flex items-start"
              >
                <div className="w-6 h-6 rounded-full bg-bloom-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="ml-3 text-gray-700">{recommendation}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 space-y-4">
            <Button 
              onClick={onContinue}
              className="w-full py-6 text-lg rounded-full bg-bloom-purple hover:bg-purple-600 transition-all flex items-center justify-center"
            >
              Start My Wellness Journey Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={onRestart}
              className="w-full"
            >
              Retake Quiz
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
