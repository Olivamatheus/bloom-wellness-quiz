
import { Question } from "@/types/quiz";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SingleChoiceQuestionProps {
  question: Question;
  onAnswer: (value: string) => void;
}

export function SingleChoiceQuestion({ question, onAnswer }: SingleChoiceQuestionProps) {
  if (!question.options) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-bloom-purple">
        {question.text}
      </h3>
      
      <div className="space-y-4 mt-6">
        {question.options.map((option) => (
          <motion.div 
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => onAnswer(option.value)}
              variant="outline"
              className="w-full text-left justify-start p-4 h-auto border-2 hover:border-bloom-purple hover:bg-bloom-lavender/10 transition-all"
            >
              <span>{option.text}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
