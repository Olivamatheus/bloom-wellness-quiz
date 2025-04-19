
import { Question } from "@/types/quiz";
import { motion } from "framer-motion";

interface MultiCardQuestionProps {
  question: Question;
  onAnswer: (value: string) => void;
}

export function MultiCardQuestion({ question, onAnswer }: MultiCardQuestionProps) {
  if (!question.options) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-bloom-purple">
        {question.text}
      </h3>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {question.options.map((option) => (
          <motion.div 
            key={option.id}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(option.value)}
            className="cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="h-32 bg-gray-200 relative">
                {option.imageUrl && (
                  <img 
                    src={option.imageUrl} 
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-3 bg-white border-t">
                <h4 className="font-medium text-sm text-center text-gray-700">{option.text}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
