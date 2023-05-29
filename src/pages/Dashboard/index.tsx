import { Header } from "../../components/Header"
import { MainProject } from "../../components/MainProject"
import { Modal } from "../../components/Modal"
import { useModal } from "../../hooks/useModal"
import { DashboardStyled } from "./styled"


export function Dashboard() {

    const {statusModal} = useModal()

    return (
        <DashboardStyled>
            <Header/>
            <MainProject/>
            {statusModal ? (
                <Modal/>
            ):(
                null
            )}
        </DashboardStyled>
    )

}