import Item from "./item";
import "../style/lista.css";

export default function Lista({ alunos, removerAluno }) {
  return (
    <div className="list">
      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado</p>
      ) : (
        alunos.map((aluno, indice) => (
          <Item
            key={indice}
            aluno={aluno}
            indice={indice}
            removerAluno={removerAluno}
          />
        ))
      )}
    </div>
  );
}