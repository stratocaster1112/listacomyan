import { useState } from "react";
import "../style/formulario.css";

export default function formulario({ adicionarAluno }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const aoEnviar = (e) => {
    e.preventDefault();

    if (!nome || !idade) return;

    adicionarAluno({ nome, idade });
    setNome("");
    setIdade("");
  };

  return (
    <form className="form" onSubmit={aoEnviar}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}