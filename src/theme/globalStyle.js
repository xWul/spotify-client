import { injectGlobal } from 'styled-components'

const defaultStyles = () => injectGlobal`
 @import url('https://fonts.googleapis.com/css?family=Montserrat');
 * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    transition:all 0.3s ease;
 }
`

export const screens = {
  smallExtra: '480px', 
  small: '768px', 
  medium: '992px',
  large: '1200px'
}

export default defaultStyles
