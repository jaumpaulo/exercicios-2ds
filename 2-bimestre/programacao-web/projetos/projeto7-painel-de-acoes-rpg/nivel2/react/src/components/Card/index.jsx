import "./style.css"
import Botao from "../Botao"
import { User, Sword } from 'lucide-react'

export default function Card({ children }) {
    return(
        <div className="container-card">
            <div className="header">
                {children}
            </div>
            <div className="card"> {/* div de todo o conteudo do card*/}
                <div className="data-card"> {/* informações do player */}
                    <div className="image">
                        <User size={120} color="#61307a" strokeWidth={1.5} />
                    </div>

                    <div className="info">
                        <h1>Guerreiro</h1>
                        <p>Classe: <span className="span-class">Tank</span></p>
                        <p>Nível: <span className="span-niv">25</span></p>
                        <p>Vida: <span className="span-lifeAt">850</span> <span className="span-lifeTo">/ 1000</span></p>
                        <p>Experiência: <span className="span-xpAt">1250</span> <span className="span-xpTo">/ 2000</span></p>
                    </div>
                </div>

                <hr />

                <div className="btn-actions"> {/* botões de ação */}
                    <div className="buttons">
                        <Botao 
                        texto="ATACAR"
                        onClick={() => alert("Atacando inimigo!")}
                        className="btn-ata"
                        />
                    </div>
                    
                    <div className="buttons">
                        <Botao 
                        texto="DEFENDER"
                        onClick={() => alert("Defendendo posição!")}
                        className="btn-def"
                        />
                    </div>
                    
                    <div className="buttons">
                        <Botao 
                        texto="FUGIR"
                        onClick={() => alert("Fugindo da batalha!")}
                        className="btn-fug"
                        />
                    </div>
                </div>
            </div>
        </div>
    )   
}