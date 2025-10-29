import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import assistantImage from "@/assets/assistant.png";
import { BookOpen, GraduationCap, Users } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Login Form Section */}
        <div className="animate-slide-in-left">
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Portal EAD Maker
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Ambiente de interação e aprendizagem sobre a plataforma
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="login" className="text-sm font-medium">
                  Login
                </Label>
                <Input
                  id="login"
                  type="text"
                  placeholder="Digite seu login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="h-12 transition-all duration-300 focus:shadow-soft"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha" className="text-sm font-medium">
                  Senha
                </Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="h-12 transition-all duration-300 focus:shadow-soft"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline transition-all duration-300"
                  onClick={() => toast.info("Funcionalidade em desenvolvimento")}
                >
                  Esqueceu sua conta?
                </button>
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold shadow-soft hover:shadow-lg transition-all duration-300"
                >
                  Entrar
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 text-base font-semibold border-2 hover:bg-secondary transition-all duration-300"
                  onClick={() => toast.info("Funcionalidade em desenvolvimento")}
                >
                  Cadastre-se agora
                </Button>
              </div>
            </form>

            {/* Features Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Cursos</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Aprendizado</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Comunidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assistant Section */}
        <div className="hidden md:flex flex-col items-center justify-center animate-slide-in-right">
          <div className="relative">
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl shadow-card p-6 max-w-xs animate-fade-in">
              <div className="relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-card"></div>
                <p className="text-primary font-semibold text-lg">
                  Olá, Bem Vindo ao Portal EAD MAKER.
                </p>
              </div>
            </div>
            <img
              src={assistantImage}
              alt="Assistente Virtual EAD Maker"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
