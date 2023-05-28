import { useAuth } from "../../hooks/useAuth";
import { CardContact } from "../CardContact";
import { ListContactsStyled } from "./styled";


export function ListContacts() {

    const {contacts} = useAuth()

    return (
        <ListContactsStyled>
            {contacts?.map((contact)=>{
                return (
                    <CardContact key={contact.id} contact={contact}/>
                )
            })}
        </ListContactsStyled>
    )

}