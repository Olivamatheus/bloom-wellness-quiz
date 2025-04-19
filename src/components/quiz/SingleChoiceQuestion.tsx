
import { Question } from "@/types/quiz";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

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
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="bg-white/80 backdrop-blur-sm border-theme-violet-light shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-xl md:text-2xl font-sora font-semibold mb-8 text-center text-gray-800">
            {question.text}
          </h3>
          
          <div className="space-y-4">
            {question.options.map((option) => (
              <motion.div 
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => onAnswer(option.value)}
                  variant="outline"
                  className="w-full group relative flex items-center justify-between p-6 h-auto border-2 hover:border-theme-violet hover:bg-gradient-to-r hover:from-theme-violet-light/20 hover:to-transparent transition-all duration-300"
                >
                  <div className="flex items-start text-left space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-theme-violet flex items-center justify-center group-hover:bg-theme-violet transition-colors">
                      <Check className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-sora font-medium text-gray-800">{option.text}</span>
                      {option.description && (
                        <p className="text-sm text-gray-600">{option.description}</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-theme-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
