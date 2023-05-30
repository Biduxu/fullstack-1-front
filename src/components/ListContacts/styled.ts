import styled from "styled-components"

export const ListContactsStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media(max-width: 750px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`