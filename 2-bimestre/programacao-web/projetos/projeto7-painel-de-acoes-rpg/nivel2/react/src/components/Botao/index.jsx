import "./style.css" 
import { Sword } from 'lucide-react'

export default function Botoes({ texto, icon,...rest }) {
    return(
        <>
            <button {...rest}>{texto}</button>
        </>
    )
}