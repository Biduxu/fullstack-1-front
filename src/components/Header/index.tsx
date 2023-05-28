import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./styled";
import { useAuth } from "../../hooks/useAuth";


export function Header() {

    const {setLogin} = useAuth()

    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("tokenListContacts")
        setLogin(false)
        navigate("/")
    }

    return (
        <HeaderStyled>
            <div>
                <h2>Nome do Perfil</h2>
                <button onClick={()=>{logout()}}>Sair</button>
            </div>
        </HeaderStyled>
    )

}