import { Flex, Heading, Text } from "@chakra-ui/react";
import ListaDeProjetos from "../../components/listaDeProjetos/ListaDeProjetos";
import { useEffect } from "react";


const Projetos = () => {
    useEffect(() => {
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push({
            event: 'pageview-projetos'
        });
    }, []);
    
    return (
        <Flex flexDirection={"column"} mx={{base: 8, sm:20}} >
            <Flex flexDirection={"column"}>
                <Heading as={"h1"} fontFamily={"supermolotBold"} fontSize={{base:"3xl", sm:"4xl"}}>Meus</Heading>
                <Text fontFamily={"robotoFlex"} fontWeight={700} fontSize={{base:"6xl", sm:"7xl"}}>Projetos</Text>
            </Flex>
            <ListaDeProjetos/>
        </Flex>
    );

}
export default Projetos;
