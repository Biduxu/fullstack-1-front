import styled from "styled-components"

export const ModalStyled = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .modalContent{
        width: 50%;
        background-color: var(--color-grey-0);
    }
`