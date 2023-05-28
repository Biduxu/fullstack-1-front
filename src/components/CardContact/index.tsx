import { useModal } from "../../hooks/useModal";
import { Contact } from "../../providers/AuthProvider";
import { CardContactStyled } from "./styled";

interface CardContactProps {
    contact: Contact
}


export function CardContact ({contact}: CardContactProps){

    const { setStatusModal, setIsUpdate } = useModal()

    function update() {
        setIsUpdate(true)
        setStatusModal(true)
    }

    return (
        <CardContactStyled>
            <div>
                <h3>{contact.fullName}</h3>
            </div>
            <div className="infoContact">
                <p>{`Email: ${contact.email}`}</p>
                <p>{`Telefone: ${contact.phone}`}</p>
            </div>
            <div className="divButtons">
                <button onClick={()=>{update()}}>Editar</button>
                <button>Excluir</button>
            </div>
        </CardContactStyled>
    )

}