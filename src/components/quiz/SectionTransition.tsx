
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface SectionTransitionProps {
  section: number;
  onComplete: () => void;
}

export function SectionTransition({ section, onComplete }: SectionTransitionProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);
  
  const getTransitionContent = () => {
    switch (section) {
      case 1:
        return {
          title: "Analyzing Your Physical Wellness",
          messages: [
            "Calculating energy patterns...",
            "Mapping physical preferences...",
            "Identifying key strength areas...",
          ],
          visual: (
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-bloom-pink to-bloom-purple mx-auto mb-8"
            />
          ),
        };
      case 2:
        return {
          title: "Processing Emotional & Financial Insights",
          messages: [
            "Mapping emotional patterns...",
            "Calculating balance scores...",
            "Identifying optimization areas...",
          ],
          visual: (
            <div className="relative w-32 h-32 mx-auto mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-bloom-lavender"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
                className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-bloom-peach"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.6 }}
                className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-bloom-pink"
              />
            </div>
          ),
        };
      case 3:
        return {
          title: "Creating Your Wellness Roadmap",
          messages: [
            "Analyzing preference patterns...",
            "Generating personalized profile...",
            "Preparing recommendations...",
          ],
          visual: (
            <div className="relative w-40 h-32 mx-auto mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3 }}
                className="h-2 bg-bloom-purple rounded-full absolute top-0"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 2.5, delay: 0.3 }}
                className="h-2 bg-bloom-pink rounded-full absolute top-8"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 2, delay: 0.6 }}
                className="h-2 bg-bloom-peach rounded-full absolute top-16"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90%" }}
                transition={{ duration: 2.8, delay: 0.9 }}
                className="h-2 bg-bloom-lavender rounded-full absolute top-24"
              />
            </div>
          ),
        };
      default:
        return {
          title: "Processing Your Responses",
          messages: ["Please wait..."],
          visual: null,
        };
    }
  };
  
  const content = getTransitionContent();
  const [messageIndex, setMessageIndex] = useState(0);
  
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev < content.messages.length - 1 ? prev + 1 : prev));
    }, 1000);
    
    return () => clearInterval(messageTimer);
  }, [content.messages.length]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-bloom-purple">
        {content.title}
      </h2>
      
      {content.visual}
      
      <motion.div
        key={messageIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg text-gray-700 mb-8 h-8 text-center"
      >
        {content.messages[messageIndex]}
      </motion.div>
      
      <div className="w-full max-w-sm">
        <Progress value={progress} className="h-2" />
      </div>
    </motion.div>
  );
}
