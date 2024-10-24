import { extendTheme, textDecoration } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      //bg: mode('light', 'dark')(props) //This line is used to change the background color for theme
    }
  }),
};

const components = {
  //Controla el tamaño global de los contenedores
  Container: {
    variants: {
      'page-container': {
        m: 0,
        justifySelf: 'center',
        maxW: 'none',
        width: { base: 'fit', md: 'fit', m: 'fit', lg: '70%' }
      }
    },
    //baseStyle: {
    //  m: 0,
    //  justifySelf: 'center',
    //  maxW: 'none',
    //  width: { base: 'fit', md: 'fit', m: 'fit', lg: '70%' }
    //},
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('green', 'yellow')(props),
      textUnderlineOffset: 3,
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  grassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme;
