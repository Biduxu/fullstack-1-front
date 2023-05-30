import styled from "styled-components"

export const MainProjectStyled = styled.main`
    width: 100%;
    padding: 0 20px;

    .content{
        margin: 0 auto;
        max-width: 1350px;
        display: flex;
        flex-direction: column;
    }

    .divTitle{
        padding: 20px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .divTitle h1{
        font-size: var(--size-0);
        color: var(--color-primary);
    }

    .divTitle button{
        padding: 10px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-1);
        font-size: var(--size-4);
        color: var(--color-grey-0);
    }

    .divTitle button:hover{
        background-color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
    }
`