import { useState } from "react";
import Formulario from "./componentes/formulario";
import Lista from "./componentes/lista";
import "./style/App.css";

export default function App() {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const adicionarAluno = () => {
    if (!nome || !idade) return;

    setAlunos([...alunos, { nome, idade }]);
    setNome("");
    setIdade("");
  };

  const removerAluno = (indice) => {
    setAlunos(alunos.filter((_, i) => i !== indice));
  };

  const removerUltimo = () => {
    setAlunos(alunos.slice(0, -1));
  };

  const adicionarInicio = () => {
    if (!nome || !idade) return;

    setAlunos([{ nome, idade }, ...alunos]);
    setNome("");
    setIdade("");
  };

  const removerPrimeiro = () => {
    setAlunos(alunos.slice(1));
  };

  const alterarSegundo = () => {
    if (alunos.length < 2 || !nome || !idade) return;

    const novos = [...alunos];
    novos[1] = { nome, idade };
    setAlunos(novos);
  };

  return (
    <div className="app">
      <h1>Gerenciador de Alunos</h1>

      <Formulario
        nome={nome}
        idade={idade}
        setNome={setNome}
        setIdade={setIdade}
      />

      <div className="botoes">
        <button onClick={adicionarAluno}>
          Adicionar
        </button>

        <button onClick={removerUltimo}>
          Remover Último
        </button>

        <button onClick={adicionarInicio}>
          Adicionar Início
        </button>

        <button onClick={removerPrimeiro}>
          Remover Primeiro
        </button>

        <button onClick={alterarSegundo}>
          Alterar Segundo
        </button>
      </div>

      {}
      <Lista alunos={alunos} removerAluno={removerAluno} />
    </div>
  );
}