import styled from "styled-components"

export const InputStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    label{
        color: var(--color-grey-0);
    }

    input{
        padding: 10px 20px;
        border: 2px solid var(--color-grey-0);
        border-radius: var(--radius-1);
    }
`