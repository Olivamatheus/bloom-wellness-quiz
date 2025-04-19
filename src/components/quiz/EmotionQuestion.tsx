
import { Question } from "@/types/quiz";
import { motion } from "framer-motion";

const emotions = {
  joy: { emoji: "😊", color: "bg-yellow-100" },
  anxiety: { emoji: "😰", color: "bg-blue-100" },
  contentment: { emoji: "😌", color: "bg-green-100" },
  frustration: { emoji: "😤", color: "bg-red-100" },
  overwhelm: { emoji: "😩", color: "bg-purple-100" },
  optimism: { emoji: "😃", color: "bg-amber-100" },
};

interface EmotionQuestionProps {
  question: Question;
  onAnswer: (value: string) => void;
}

export function EmotionQuestion({ question, onAnswer }: EmotionQuestionProps) {
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
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        {question.options.map((option) => {
          const emotion = emotions[option.value as keyof typeof emotions] || { emoji: "😐", color: "bg-gray-100" };
          
          return (
            <motion.div 
              key={option.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onAnswer(option.value)}
              className={`cursor-pointer ${emotion.color} rounded-xl p-4 flex flex-col items-center justify-center shadow hover:shadow-md transition-all`}
            >
              <div className="text-4xl mb-2">{emotion.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{option.text}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
