import { useState } from "react"
import api from "../../utils/api"
import "./style.css"

export default function Reunioes() {


    const [titulo, setTitulo] = useState<string>("")
    const [tipo, setTipo] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [organizador, setOrganizador] = useState<string>("")

    function loadReunioes() {
        api.get("reunioes").then((response: any) => {
            setTitulo(response.data.titulo);
        })
    }


    return (

        <>

        </>

    );
}