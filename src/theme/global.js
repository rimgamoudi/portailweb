import { createGlobalStyle } from 'styled-components/macro'

const Theme = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  html {
    font-family: 'Roboto', 'Helvetica', sans-serif;
    body {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
  }
`

export default Theme
