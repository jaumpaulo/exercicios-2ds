export default function Profile({ nome, idade, profissao, foto }) {
  return(
    <>
      <img src={foto} />
      <h1>{nome}</h1>
      <p>Idade: {idade} anos</p>
      <p>Profissão: {profissao}</p>
    </>
  )
}