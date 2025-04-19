
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Star, Smile } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-gradient-to-br from-theme-violet-light via-white to-theme-rose-light border-none shadow-xl">
          <CardContent className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-gray-800 text-center">
              Descubra Seu Caminho para o Bem-Estar
            </h1>
            
            <p className="text-lg mb-8 text-gray-600 text-center max-w-xl mx-auto">
              Entenda suas necessidades únicas e receba um plano personalizado para transformar sua saúde e bem-estar.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 mb-4 rounded-full bg-theme-violet-light flex items-center justify-center">
                  <Heart className="w-6 h-6 text-theme-violet" />
                </div>
                <h3 className="font-sora font-semibold mb-2 text-gray-800">Autocuidado</h3>
                <p className="text-sm text-gray-600">Descubra práticas que se encaixam no seu estilo de vida</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 mb-4 rounded-full bg-theme-rose-light flex items-center justify-center">
                  <Star className="w-6 h-6 text-theme-rose" />
                </div>
                <h3 className="font-sora font-semibold mb-2 text-gray-800">Equilíbrio</h3>
                <p className="text-sm text-gray-600">Harmonize corpo, mente e energia vital</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 mb-4 rounded-full bg-theme-sage-light flex items-center justify-center">
                  <Smile className="w-6 h-6 text-theme-sage-dark" />
                </div>
                <h3 className="font-sora font-semibold mb-2 text-gray-800">Transformação</h3>
                <p className="text-sm text-gray-600">Desenvolva hábitos sustentáveis e duradouros</p>
              </div>
            </div>
            
            {!isReady ? (
              <Button 
                onClick={() => setIsReady(true)}
                className="w-full md:w-auto md:min-w-[200px] mx-auto font-sora text-lg px-8 py-6 bg-theme-violet hover:bg-theme-violet-dark text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Começar Jornada
                <ArrowRight className="w-5 h-5" />
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-theme-violet-light"
              >
                <h3 className="text-xl font-sora font-semibold mb-4 text-gray-800">Pronta para se conhecer melhor?</h3>
                <p className="mb-6 text-gray-600">Em apenas 5 minutos, você descobrirá insights valiosos sobre sua saúde e receberá um plano personalizado para seu bem-estar.</p>
                <Button 
                  onClick={onStart}
                  className="w-full font-sora text-lg px-8 py-6 bg-theme-violet hover:bg-theme-violet-dark text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Iniciar Avaliação
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
