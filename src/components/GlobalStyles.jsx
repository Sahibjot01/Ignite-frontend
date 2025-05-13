import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding :0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: 'Montserrat',sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2rem;
        font-family: 'Abril Fatface',cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color:#333;
        padding: 1.5rem 0;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: 'Montserrat',sans-serif;
    }
`;

// Shared styles
export const sharedCardStyles = `
  border-radius: 1rem;
  overflow: hidden;
  background: #f5f5f5;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
`;

export default GlobalStyles;
