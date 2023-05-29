import { useModal } from "../../hooks/useModal";
import { FormModal } from "../FormModal";
import { ModalStyled } from "./styled";


export function Modal() {

    const {setStatusModal, isUpdate, setIsUpdate} = useModal()

    function closeModal(){
        setIsUpdate(false)
        setStatusModal(false)
    }

    return (
        <ModalStyled>
            <div className="modalContent">
                {isUpdate ? (
                    <>
                        <div className="divTitleButton">
                            <h2>Editar</h2>
                            <button onClick={()=>{closeModal()}}>X</button>
                        </div>
                        <FormModal/>
                    </>
                ):(
                    <>
                        <div className="divTitleButton">
                            <h2>Cadastrar Contato</h2>
                            <button onClick={()=>{closeModal()}}>X</button>
                        </div>
                        <FormModal/>
                    </>
                )}
            </div>
        </ModalStyled>
    )

}