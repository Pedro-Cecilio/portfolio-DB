import { Box, VStack } from "@chakra-ui/react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import { Outlet } from "react-router-dom";
import Rodape from "../../components/rodape/Rodape";

const PaginaBase = () => {  

    return (
        <VStack spacing={0} alignItems="stretch" minH="100vh">
            <Cabecalho />
            <Box
                as="main"
                flex="1"
                flexBasis="calc(100vh - 87px)"
            >
                <Outlet />
            </Box>
            <Rodape/>
        </VStack>
    );  

}
export default PaginaBase; 
