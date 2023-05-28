import { useModal } from "../../hooks/useModal";
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
                        <div>
                            <h2>Editar</h2>
                            <button onClick={()=>{closeModal()}}>X</button>
                        </div>
                    </>
                ):(
                    <>
                        <div>
                            <h2>Cadastrar</h2>
                            <button onClick={()=>{closeModal()}}>X</button>
                        </div>
                    </>
                )}
            </div>
        </ModalStyled>
    )

}