import { Flex, Text, UnorderedList } from "@chakra-ui/react";
import habilidade4 from "../../assets/habilidade4.svg"
import habilidade3 from "../../assets/habilidade3.svg"
import Habilidade from "../habilidade/Habilidade";
const ListaDeHabilidades = () => {
    return (
        <Flex flexDirection={"column"}>
            <Text fontFamily={"supermolotBold"} fontSize={"2xl"}>
                Habilidades
            </Text>
            <UnorderedList ml={6} w={"300px"} >
                <Habilidade texto="Java" imagem={habilidade4} />
                <Habilidade texto="Spring boot" imagem={habilidade4} />
                <Habilidade texto="Spring Security" imagem={habilidade3} />
                <Habilidade texto="Flyway" imagem={habilidade3} />
                <Habilidade texto="React" imagem={habilidade3} />
                <Habilidade texto="Node" imagem={habilidade3} />
                <Habilidade texto="Typescript" imagem={habilidade3} />
                <Habilidade texto="HTML" imagem={habilidade3} />
                <Habilidade texto="CSS" imagem={habilidade3} />
                <Habilidade texto="Selenium" imagem={habilidade3} />
                <Habilidade texto="RestAssured" imagem={habilidade3} />
                <Habilidade texto="Teste Unitários" imagem={habilidade4} />
                <Habilidade texto="Testes de Integração" imagem={habilidade4} />
            </UnorderedList>
        </Flex>
    );
}

export default ListaDeHabilidades;

