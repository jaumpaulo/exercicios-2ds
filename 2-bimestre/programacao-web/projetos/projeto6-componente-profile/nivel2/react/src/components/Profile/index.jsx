export default function Profile({ nome, idade, profissao, foto }) {
  return(
    <>
      <img src={foto} />
      <h1>{nome}</h1>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Profissão:</strong> {profissao}</p>
    </>
  )
}