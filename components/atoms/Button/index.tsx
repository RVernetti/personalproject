import { styled } from '../../../stitches.config'

const Button = styled('button', {
  height: '50px',
  width: '50px',
  fontFamily: '$system',
  transition: '0.5s',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
      4: { fontSize: '$4' },
      5: { fontSize: '$5' },
      6: { fontSize: '$6' },
      7: { fontSize: '$7' },
      8: { fontSize: '$8' },
      9: { fontSize: '$9' },
      10: { fontSize: '$10' },
    },
    colors: {
      default: {
        fontSize: '13px',
        padding: '5px 10px',  
        borderRadius: '8px',    
        backgroundColor: '$primary500',
        color: 'white',
        '&:hover': {
          backgroundColor: '$primary600',
          color: 'white',
        },
      },
      tile: {
        backgroundColor: 'transparent',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.05)',
        border: 0,
        '&:hover': {
          backgroundColor: 'LightCyan',
        },      
      }
    },
    border: {
      tile: {
        border: '1px solid black',
        borderRadius: '1000px',
      },
      form: {
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '&:hover': {
          border: '1px solid #FFFFFF',
        },
      },
      formSelected: {
        border: '1px solid #FFFFFF',
      },
      error: {
        border: '2px solid #FCA5A5',
      },
      primary: {
        border: '1px solid $primary500',
      },
    },
  },
  '&[disabled]': {
    opacity: 0.4,
    pointerEvents: 'none',
  },
  defaultVariants: {
    colors: 'default',
    size: 6,
  },
})

export default Button
