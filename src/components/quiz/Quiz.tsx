
import { useState, useEffect } from "react";
import { Question, Answer, Result, QuizSection } from "@/types/quiz";
import { WelcomeScreen } from "./WelcomeScreen";
import { ScaleQuestion } from "./ScaleQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";
import { MultiCardQuestion } from "./MultiCardQuestion";
import { EmotionQuestion } from "./EmotionQuestion";
import { SectionTransition } from "./SectionTransition";
import { QuizResults } from "./QuizResults";
import { quizQuestions, profiles } from "@/data/quizData";
import { Progress } from "@/components/ui/progress";

interface QuizProps {
  onComplete: (redirectUrl?: string) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState<"welcome" | "question" | "transition" | "results">("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState<QuizSection>(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  
  const totalQuestions = quizQuestions.length;
  const sectionQuestions = quizQuestions.filter(q => q.section === currentSection);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  
  const handleStartQuiz = () => {
    setCurrentStep("question");
  };
  
  const handleAnswer = (value: string | number) => {
    const answer: Answer = {
      questionId: currentQuestion.id,
      value,
    };
    
    setAnswers(prev => [...prev, answer]);
    
    // Determine if we've completed the current section
    const isLastQuestionInSection = sectionQuestions.findIndex(q => q.id === currentQuestion.id) === sectionQuestions.length - 1;
    
    if (isLastQuestionInSection && currentSection < 3) {
      setCurrentStep("transition");
      setCurrentSection(prev => (prev + 1) as QuizSection);
    } else if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Generate results
      generateResults();
      setCurrentStep("results");
    }
  };
  
  const handleTransitionComplete = () => {
    setCurrentStep("question");
  };
  
  const handleRestart = () => {
    setCurrentStep("welcome");
    setCurrentQuestionIndex(0);
    setCurrentSection(1);
    setAnswers([]);
    setResult(null);
  };
  
  const handleContinue = () => {
    // Here you'd typically redirect to a sales page or another destination
    onComplete("https://example.com/checkout");
  };
  
  const generateResults = () => {
    // This is a simplified algorithm to generate a "personalized" result
    // In a real app, you might have a more sophisticated algorithm
    
    // Calculate some metrics based on answers
    const scaleQuestionAnswers = answers.filter(a => 
      quizQuestions.find(q => q.id === a.questionId)?.type === "scale"
    );
    
    const averageScaleValue = scaleQuestionAnswers.length > 0
      ? scaleQuestionAnswers.reduce((sum, a) => sum + Number(a.value), 0) / scaleQuestionAnswers.length
      : 5;
    
    // Randomly select a profile (in a real app, this would be based on answers)
    const profileIndex = Math.floor(Math.random() * profiles.length);
    const selectedProfile = profiles[profileIndex];
    
    // Generate synthetic metrics (these would be calculated from answers in a real app)
    const energyLevel = Math.min(10, Math.max(4, Math.floor(averageScaleValue) + Math.floor(Math.random() * 3)));
    const mentalStrength = Math.min(10, Math.max(4, Math.floor(averageScaleValue) + Math.floor(Math.random() * 3) - 1));
    const balanceScore = Math.min(10, Math.max(4, Math.floor(averageScaleValue) + Math.floor(Math.random() * 3) - 2));
    
    // Example personalized recommendations
    const recommendations = [
      "Start with our 5-minute morning energizing routine to boost your daily vitality",
      "Focus on our balanced nutrition guide customized for your energy needs",
      "Try our guided meditation sessions to strengthen your mental resilience",
      "Explore our 28-day transformation program designed for your profile",
    ];
    
    setResult({
      profile: selectedProfile,
      energyLevel,
      mentalStrength,
      balanceScore,
      recommendations,
    });
  };
  
  const renderQuestion = () => {
    if (!currentQuestion) return null;
    
    const handleQuestionAnswer = (value: string | number) => {
      handleAnswer(value);
    };
    
    switch (currentQuestion.type) {
      case "scale":
        return <ScaleQuestion question={currentQuestion} onAnswer={handleQuestionAnswer} />;
      case "single":
        return <SingleChoiceQuestion question={currentQuestion} onAnswer={handleQuestionAnswer} />;
      case "multicard":
        return <MultiCardQuestion question={currentQuestion} onAnswer={handleQuestionAnswer} />;
      case "emotion":
        return <EmotionQuestion question={currentQuestion} onAnswer={handleQuestionAnswer} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full px-4 py-8 max-w-3xl mx-auto">
      {currentStep === "welcome" && (
        <WelcomeScreen onStart={handleStartQuiz} />
      )}
      
      {currentStep === "question" && (
        <div className="space-y-6">
          <div className="w-full">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              <span>Section {currentSection} of 3</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {renderQuestion()}
        </div>
      )}
      
      {currentStep === "transition" && (
        <SectionTransition 
          section={currentSection} 
          onComplete={handleTransitionComplete} 
        />
      )}
      
      {currentStep === "results" && result && (
        <QuizResults 
          result={result} 
          onRestart={handleRestart} 
          onContinue={handleContinue} 
        />
      )}
    </div>
  );
}
