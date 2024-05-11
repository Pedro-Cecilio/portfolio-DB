import { Flex } from "@chakra-ui/react";
import LogoRodape from "../logoRodape/LogoRodape"

const Rodape = () => {

    return (
        <Flex bg={"azul.100"} h={"113px"} justifyContent={"center"} mt={8}>
            <Flex mr={8}>
                <LogoRodape />
            </Flex>
        </Flex>

    );

}
export default Rodape; 
