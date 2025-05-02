import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { Textarea } from "../../@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Tecnologia
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Viagens
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Comida
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Lifestyle
            </Link>
          </div>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </div>
      </nav>

      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-3x1 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Bem vindo ^-^
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Compartilhe seus pensamentos, ideias e histórias com o mundo. Este é
            o seu espaço para se expressar e se conectar com outras pessoas.
          </p>
        </div>
      </section>

      <section className="container pb-24">
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle>Faça sua primeira publicação</CardTitle>
            <CardDescription>
              Escreva seus pensamentos abaixo e publique no seu blog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Escreva seu título"
                  className="w-full border-none bg-transparent text-2xl font-bold
                  utline-none placeholder:text-muted-foreground/50"
                />
              </div>
              <Textarea
                placeholder="Comece a escrever seu conteúdo"
                className="min-h-[200px] resize-none"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Salvar</Button>
            <Button>Publicar</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
