import { Flex, Image, ListItem } from "@chakra-ui/react";

interface HabilidadeProps {
    texto: string;
    imagem: string;
}
const Habilidade = ({ texto, imagem }: HabilidadeProps) => {

    return (
        <Flex justifyContent={"space-between"} my={2} fontFamily={"robotoFlex"} fontSize={"md"}>
            <ListItem>{texto}</ListItem>
            <Image src={imagem} />
        </Flex>
    );

}
export default Habilidade; 
