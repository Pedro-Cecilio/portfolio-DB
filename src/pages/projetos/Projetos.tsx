import { Flex, Heading, Text } from "@chakra-ui/react";
import ListaDeProjetos from "../../components/listaDeProjetos/ListaDeProjetos";


const Projetos = () => {

    return (
        <Flex flexDirection={"column"} mx={20} >
            <Flex flexDirection={"column"}>
                <Heading as={"h1"} fontFamily={"supermolotBold"} fontSize={"4xl"}>Meus</Heading>
                <Text fontFamily={"robotoFlex"} fontWeight={700} fontSize={"7xl"}>Projetos</Text>
            </Flex>
            <ListaDeProjetos/>
        </Flex>
    );

}
export default Projetos;
