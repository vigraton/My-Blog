import { Button } from "./button";
import { Card } from "./card";
import { Input } from "./input";
import { useState, useEffect } from "react";

export default function AuthModal() {
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem("Name stored", nome);
    setNome(true);

    localStorage.setItem("Password stored", senha);
    setSenha(true);

    if (!nome || !senha) {
      alert("Preencha o campo");
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="bg-slate-100">
      <Card className="flex w-[350px] h-[300px] justify-center translate-y-1/2">
        <h2 className="font-bold items-center justify-center flex text-xl">
          Register in our blog
        </h2>
        <div className="flex flex-col gap-y-4 p-6">
          <Input
            placeholder="Name"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={senha}
            onChane={(e) => setSenha(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </div>
      </Card>
    </div>
  );
}
