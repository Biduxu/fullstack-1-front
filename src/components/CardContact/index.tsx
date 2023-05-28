import { useModal } from "../../hooks/useModal";
import { Contact } from "../../providers/AuthProvider";
import { api } from "../../services/api";
import { CardContactStyled } from "./styled";

interface CardContactProps {
    contact: Contact
}


export function CardContact ({contact}: CardContactProps){

    const { setStatusModal, setIsUpdate, setId } = useModal()

    function update(id: string) {
        setId(id)
        setIsUpdate(true)
        setStatusModal(true)
    }

    async function removeContact(id: string){
        const token = localStorage.getItem("tokenListContact")

        try{
            await api.delete(`/contacts/${id}`, {headers: {authorization: `Bearer ${token}`}})
            window.location.reload()
        }catch(err){
            return null
        }   
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
                <button onClick={()=>{update(contact.id)}}>Editar</button>
                <button onClick={()=>{removeContact(contact.id)}}>Excluir</button>
            </div>
        </CardContactStyled>
    )

}