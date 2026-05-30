import Card from "./components/Card"
import Formulario from "./components/FormularioMensagem"
import { Swords } from 'lucide-react'

export default function App() {
  return(
    <div className="container">
      <Card>
        <Swords size={30} />
        <h1>LEGENDS ARENA</h1>
      </Card>

      <Formulario />
    </div>
  )
}