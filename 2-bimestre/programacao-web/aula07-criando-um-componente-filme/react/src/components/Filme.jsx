export default function Filme() {
  const filme = {
    nome: "Matrix",
    ano: 1999,
    descricao: "Um hacker descobre a verdade sobre a realidade."
  }

  return (
    <div>
      <h1>Nome do filme: {filme.nome}</h1>
      <h2>Ano do filme: {filme.ano}</h2>
      <p>{filme.descricao}</p>
    </div>
  )
}