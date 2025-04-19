
import { useState } from "react";
import { Question } from "@/types/quiz";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

interface ScaleQuestionProps {
  question: Question;
  onAnswer: (value: number) => void;
}

export function ScaleQuestion({ question, onAnswer }: ScaleQuestionProps) {
  const [value, setValue] = useState(5);
  
  const handleChange = (newValue: number[]) => {
    setValue(newValue[0]);
    onAnswer(newValue[0]);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-bloom-purple">
        {question.text}
      </h3>
      
      <div className="mt-8 mb-10">
        <Slider 
          value={[value]} 
          min={1} 
          max={10} 
          step={1} 
          onValueChange={handleChange} 
          className="w-full" 
        />
        
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{question.minLabel}</span>
          <span>{question.maxLabel}</span>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          Slide to select your answer
        </p>
      </div>
    </motion.div>
  );
}
