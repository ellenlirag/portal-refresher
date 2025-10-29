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
    <div className="min-h-screen bg-gradient-background flex">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-xl animate-fade-in">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">
              Portal EAD Maker
            </h1>
            <p className="text-lg text-muted-foreground">
              Ambiente de interação e aprendizagem sobre a plataforma Maker!
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="login" className="text-base font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Login
              </Label>
              <Input
                id="login"
                type="text"
                placeholder="Digite seu login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="h-14 text-base transition-all duration-300 focus:shadow-soft border-2"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="senha" className="text-base font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="h-14 text-base transition-all duration-300 focus:shadow-soft border-2"
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

            <div className="space-y-4 pt-4">
              <Button
                type="submit"
                className="w-full h-14 text-lg font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                Entrar
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full h-14 text-lg font-bold border-2 hover:bg-secondary transition-all duration-300"
                onClick={() => toast.info("Funcionalidade em desenvolvimento")}
              >
                Cadastre-se agora
              </Button>
            </div>
          </form>

          {/* Features Section */}
          <div className="mt-16 pt-8 border-t-2 border-border">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Cursos Interativos</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Aprendizado Contínuo</p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Comunidade Ativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Assistant */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 items-center justify-center p-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center animate-slide-in-right">
          {/* Speech Bubble */}
          <div className="mb-8 bg-card rounded-3xl shadow-card p-8 max-w-md relative">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-card"></div>
            <p className="text-primary font-bold text-2xl text-center">
              Olá, Bem Vindo ao Portal EAD MAKER.
            </p>
          </div>

          {/* Assistant Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform scale-105"></div>
            <img
              src={sofiaImage}
              alt="Sofia - Assistente Virtual EAD Maker"
              className="relative w-full max-w-md rounded-3xl shadow-soft"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-lg font-medium">
              Pronta para ajudar você a navegar pela plataforma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
