import {Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import Apresentacao from "../apresentacao/Apresentacao";
import SobreMim from "../sobreMim/SobreMim";
import foto from "../../assets/foto.jpg"
import Habilidades from "../listaDeHabilidades/ListaDeHabilidades";
const Corpo = () => {

    return (
        <Flex h={"100%"}  justifyContent={"center"} alignItems={"flex-start"} px={{base: 10}} pb={10}>
            <Grid
                templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
                gap={{base: 8, md: 0}}
            >
                <GridItem colSpan={1} h={{md: "330px"}}>
                    <Apresentacao /> 
                </GridItem>
                <GridItem colSpan={1} h={{md: "330px"}}>
                    <Image src={foto} w={567} h={292}/>
                </GridItem>
                <GridItem colSpan={1}>
                    <SobreMim /> 
                </GridItem>
                <GridItem colSpan={1}>
                    <Habilidades /> 
                </GridItem>
            </Grid>
        </Flex>
    );

}
export default Corpo; 
