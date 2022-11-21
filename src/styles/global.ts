import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    font-family: "Roboto", sans-serif;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    
    -webkit-font-smoothing: antialiased;

    

    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }
 
  }

 


`
