import { useModal } from "../../hooks/useModal";
import { ListContacts } from "../ListContacts";
import { MainProjectStyled } from "./styled";


export function MainProject() {

    const {setStatusModal} = useModal()

    return (
        <MainProjectStyled>
            <div className="content">
                <div className="divTitle">
                    <h1>Lista de contatos</h1>
                    <button onClick={()=>{setStatusModal(true)}}>Cadastrar contato</button>
                </div>
                <ListContacts/>
            </div>
        </MainProjectStyled>
    )

}