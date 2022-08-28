import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary: #EB2A44;
        --secondary: #E0E0E0;
        --black: #828282;
    }
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    }

    body{
        background-color: var(--black);
        width: 100%;
        height: 100%;
    }

    h1, button{
        font-family: "Righteous",
    }

    p {
        font-family: "Roboto"
    }

    ::-webkit-scrollbar {
        width: 7px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary-50);
        border-radius: 20px;
    }
`;
