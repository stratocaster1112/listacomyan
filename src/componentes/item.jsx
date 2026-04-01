import "../style/item.css";

export default function Item({ aluno, indice, removerAluno }) {
  return (
    <div className="item">
      <span>
        {aluno.nome} - {aluno.idade} anos
      </span>
      <button onClick={() => removerAluno(indice)}>
        Remover
      </button>
    </div>
  );
}