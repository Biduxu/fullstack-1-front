import styled from "styled-components"

export const LoginStyled = styled.body`
    background-color: var(--color-primary);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .firstDiv{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
    }

    .firstDiv h1{
        color: var(--color-grey-0);
        font-size: var(--size-0);
    }

    @media(max-width: 800px) {
        .firstDiv{
            padding: 20px;
            width: 100%;
        }
    }
`