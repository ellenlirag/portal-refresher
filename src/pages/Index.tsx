import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import sofiaImage from "@/assets/sofia.jpg";
import { BookOpen, GraduationCap, Users, Lock, Mail } from "lucide-react";

const Index = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login || !senha) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    toast.success("Login realizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gradient-background flex flex-col lg:flex-row">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-16">
        <div className="w-full max-w-xl animate-fade-in">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4 leading-tight">
              Portal EAD Maker
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Ambiente de interação e aprendizagem sobre a plataforma Maker!
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="login" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Login
              </Label>
              <Input
                id="login"
                type="text"
                placeholder="Digite seu login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 focus:shadow-soft border-2"
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Label htmlFor="senha" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="h-12 sm:h-14 text-sm sm:text-base transition-all duration-300 focus:shadow-soft border-2"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-primary font-medium hover:underline transition-all duration-300"
                onClick={() => toast.info("Funcionalidade em desenvolvimento")}
              >
                Esqueceu sua conta?
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <Button
                type="submit"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                Entrar
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => toast.info("Funcionalidade em desenvolvimento")}
              >
                Cadastre-se agora
              </Button>
            </div>
          </form>

          {/* Features Section */}
          <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t-2 border-border">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">Cursos Interativos</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">Aprendizado Contínuo</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">Comunidade Ativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Assistant */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 flex items-center justify-center p-4 sm:p-8 lg:p-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center animate-slide-in-right w-full max-w-md">
          {/* Speech Bubble */}
          <div className="mb-4 sm:mb-6 lg:mb-8 bg-card rounded-2xl sm:rounded-3xl shadow-card p-4 sm:p-6 lg:p-8 w-full relative animate-float cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] sm:border-l-[20px] border-l-transparent border-r-[15px] sm:border-r-[20px] border-r-transparent border-t-[18px] sm:border-t-[24px] border-t-card"></div>
            <p className="text-primary font-bold text-lg sm:text-xl lg:text-2xl text-center">
              Olá, Bem Vindo ao Portal EAD MAKER.
            </p>
          </div>

          {/* Assistant Image */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl transform scale-105"></div>
            <img
              src={sofiaImage}
              alt="Sofia - Assistente Virtual EAD Maker"
              className="relative w-full rounded-2xl sm:rounded-3xl shadow-soft"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-medium">
              Pronta para ajudar você a navegar pela plataforma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
