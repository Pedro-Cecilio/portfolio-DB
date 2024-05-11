import { extendTheme } from '@chakra-ui/react';

const tema = extendTheme({
    fonts:{
        supermolotBold: `'Supermolot Bold', serif`,
        supermolotRegular: `'Supermolot Regular', serif`,
        robotoFlex: `'Roboto Flex', serif`
    },
    colors: {
        azul: {
            100: "#BEE7F9",
            200: "#85d4f4",
            700: "#201F53"
        },
        rosa: {
            700: "#ED177D"
        },
        cinza:{
            100:"#F5F5F5"
        }
    },
});

export default tema;
