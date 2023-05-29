import styled from "styled-components"

export const ToastfyStyled = styled.div`
    position: fixed;
    width: 286px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-0);
    border-radius: var(--radius-1);
    animation: toastIt 10000ms ease-in forwards;

    @keyframes toastIt {
    0%     {right: 30px; top: -200px}
    12%    {right: 30px; top: 28px}
    50%    {right: 30px; top: 28px}
    75%    {right: 30px; top: 28px}
    100%   {right: 30px; top: 28px}
    }

    h4{
        color: var(--color-primary);
    }
`