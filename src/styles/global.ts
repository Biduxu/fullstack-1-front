import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root{

        --color-primary: #439AF8;

        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #e0e0e0;
        --color-grey-50: #999999;
        --color-grey-0: #f5f5f5;

        --color-negative: #e60000;

        --size-0: 36px;
        --size-1: 26px;
        --size-2: 22px;
        --size-3: 18px;
        --size-4: 16px;
        --size-5: 14px;
        --size-6: 12px;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 5px;

    }

    button{
        cursor: pointer;
    }

    .divInputError{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }

    .error{
        color: var(--color-negative);
        font-size: var(--size-6);
    }

`