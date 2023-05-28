import styled from "styled-components"

export const HeaderStyled = styled.header`
    background-color: var(--color-primary);
    width: 100%;

    div{
        margin: 0 auto;
        max-width: 1350px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2{
        color: var(--color-grey-0);
        font-size: var(--size-1);
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