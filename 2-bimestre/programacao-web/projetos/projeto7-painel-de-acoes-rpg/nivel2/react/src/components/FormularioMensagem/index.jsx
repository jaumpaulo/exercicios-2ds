import "./styles/FormularioCSS.css"
import { Send } from 'lucide-react';

export default function ({ type, place }) {
    return(
        <>
            <h1>FORMULÁRIO DE MENSAGEM</h1>

            <div className="data-card">

                <div className="name">
                    <p><strong>Nome:</strong></p>
                    <input type="text" placeholder="Digite seu nome" />
                </div>

                <div className="mensage">
                    <p><strong>Mensagem:</strong></p>
                    <textarea placeholder="Digite sua mensagem..."></textarea>
                </div>

                <button type="submit">
                    <Send />
                    ENVIAR MENSAGEM
                </button>
            </div>
        </>
    )
}