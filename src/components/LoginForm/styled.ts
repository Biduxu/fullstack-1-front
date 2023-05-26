import styled from "styled-components"

export const LoginFormStyled = styled.div`
    width: 100%;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .divButtons{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    button{
        padding: 10px 20px;
        border: 2px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        background-color: var(--color-grey-0);
        font-size: var(--size-5);
        color: var(--color-grey-600);
    }
    button:hover{
        border: 2px solid var(--color-grey-600);
        background-color: var(--color-grey-600);
        color: var(--color-grey-0);
    }
`