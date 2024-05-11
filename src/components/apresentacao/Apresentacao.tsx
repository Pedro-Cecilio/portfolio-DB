import { Flex,  Text } from "@chakra-ui/react";

const Apresentacao = () => {

    return (
        <Flex flexDirection={"column"} lineHeight={"2.768rem"}>
            <Text fontSize={"2xl"} fontFamily={"supermolotBold"}>
                Olá, meu nome é
            </Text>
            <Text fontSize={"5xl"} fontFamily={"robotoFlex"} fontWeight={700}>
                Pedro Cecílio
            </Text>
            <Text fontSize={"2xl"} fontFamily={"supermolotRegular"} fontWeight={400}>
                Sou desenvolvedor fullstack na DBServer.
            </Text>
        </Flex>
    );

}
export default Apresentacao; 
