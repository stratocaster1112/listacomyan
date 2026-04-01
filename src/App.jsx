import { useState } from "react";
import Formulario from "./componentes/formulario";
import Lista from "./componentes/lista";
import "./style/App.css";

export default function App() {
  const [alunos, setAlunos] = useState([]);

  const adicionarAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  const removerAluno = (indice) => {
    const novosAlunos = alunos.filter((_, i) => i !== indice);
    setAlunos(novosAlunos);
  };

  return (
    <div className="app">
      <h1>Gerenciador de Alunos</h1>
      <Formulario adicionarAluno={adicionarAluno} />
      <Lista alunos={alunos} removerAluno={removerAluno} />
    </div>
  );
}
