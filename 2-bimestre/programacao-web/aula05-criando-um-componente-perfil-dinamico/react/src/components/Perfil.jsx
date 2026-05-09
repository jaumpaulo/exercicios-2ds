export default function Perfil({ nome, idade, profissao }) {
  return (
    <div>
      <h1>{nome}</h1>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      <p>{idade >= 18 ? "Você é maior de idade." : "Você é menor de idade."}</p>
    </div>
  )
}