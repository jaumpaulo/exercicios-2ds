export default function App() {
  const usuario = {
    nome: "João Paulo",
    idade: "16",
    profissao: "desempregado"
  }

  return(
    <div>
      {usuario.idade >= 18 ? alert("Você é maior de idade.") : alert("Você é menor de idade.")}
    </div>
  )
}