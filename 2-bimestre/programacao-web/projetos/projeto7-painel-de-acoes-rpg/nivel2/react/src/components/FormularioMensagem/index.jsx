import "./style.css"
import { Send } from 'lucide-react';
import Botao from "../Botao"

export default function Formulario ({ type, place }) {
    function change(e) {
        e.preventDefault()
        alert("Mensagem enviado!")
    }

    return(
        <div className="container-form">
            <form onSubmit={change}>
                <div className="title"> {/* h1 do card  */}
                       
                        <h1>FORMULÁRIO DE MENSAGEM</h1>
                        
                </div>

                <div className="inp-name"> {/* campo do nome */}
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>

                <div className="inp-mensage"> {/* campo de mensagem */}
                    <label>Mensagem:</label>
                    <textarea placeholder="Digite sua mensagem..."></textarea>
                </div>

                <Botao 
                texto="ENVIAR MENSAGEM"
                type="submit"
                className="btn-env"
                /> {/* botão de enviar */}
            </form>
        </div>
    )
}