import styled from "styled-components"

export const FormModalStyled = styled.div`
    width: 100%;
    
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    button{
        width: 100%;
        padding: 10px;
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        font-size: var(--size-4);
        color: var(--color-grey-600);
    }

    button:hover{
        background-color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
        color: var(--color-grey-0);
    }
`