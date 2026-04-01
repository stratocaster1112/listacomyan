import "../style/formulario.css";

export default function Formulario({ nome, idade, setNome, setIdade }) {
  return (
    <div className="form">
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
    </div>
  );
}