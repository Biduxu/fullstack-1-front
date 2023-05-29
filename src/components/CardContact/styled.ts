import styled from "styled-components"

export const CardContactStyled = styled.li`
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-1);
    padding: 20px 10px; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        width: 30%;
    }

    .infoContact{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .divButtons{
        display: flex;
        gap: 10px;
        justify-content: space-evenly;
    }

    h3{
        font-size: var(--size-2);
        color: var(--color-grey-0);
    }

    p{
        font-size: var(--size-3);
        color: var(--color-grey-0);
    }

    button{
        padding: 10px;
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        font-size: var(--size-4);
    }

    button:hover{
        background-color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
        color: var(--color-grey-0);
    }
`