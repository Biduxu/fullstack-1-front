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
        padding: 20px;
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-1);
        background-color: var(--color-primary);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .divTitleButton{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .divTitleButton h2{
        font-size: var(--size-1);
        color: var(--color-grey-0);
    }

    .divTitleButton button{
        border: transparent;
        background-color: var(--color-primary);
        font-size: var(--size-2);
        color: var(--color-grey-600);
    }

    .divTitleButton button:hover{
        color: var(--color-grey-300);
    }
`