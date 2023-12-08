import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface Mode{
    mode:{
        body: string;
        gradation1: string;
        gradation2: string;
        text: string;
        border: string;
    }
}

export const Globalthis = createGlobalStyle<Mode>`
    ${reset}
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
      html,body{
        
        padding:0;
        margin:0;
      
      }
      
      #root{
        width: 100%;
        height:100vh;
        background-color:${({ mode }) => mode.body};
        color:${({mode})=>mode.text}
      }
`