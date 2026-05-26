import "./styles/CardCSS.css"

export default function Card({ children }) {
    return(
        <div className="container">
            <div className="top-card"> {/* card de cima */}
                <div className="data-card"> {/* informações do player */}
                    
                </div>

                <div className="actions"> {/* botões de ação */}

                </div>
            </div>

            <div className="bottom-card"> {/* card de baixo */}
                <div className="title"> {/* h1 do card  */}

                </div>

                <div className="inp-name"> {/* campo do nome */}

                </div>

                <div className="inp-mensage"> {/* campo de mensagem */}

                </div>

                <button></button> {/* botão de enviar */}
            </div>
        </div>
    )   
}