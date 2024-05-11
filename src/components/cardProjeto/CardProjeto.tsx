import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CardProjetoProps {
    imagem: string;
    alt: string;
    titulo: string;
    tecnologias: string;
    descricao: string;
    link: string;
}
const CardProjeto = ({ imagem, alt, titulo, tecnologias, descricao, link }: CardProjetoProps) => {

    const acessarLink = () => {
        window.open(link);
    }
    return (
        <Card minW={"300px"} w={"308px"} bg={"cinza.100"} boxShadow="2xl">
            <CardBody p={2}>
                <Image
                    src={imagem}
                    w={"300px"}
                    h={"190px"}
                    alt={alt}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='lg' fontFamily={"supermolotBold"}>{titulo}</Heading>
                    <Text fontFamily={"supermolotBold"} fontSize={"sm"} textColor={"rosa.700"}>{tecnologias}</Text>
                    <Text fontFamily={"robotoFlex"}>
                        {descricao}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button
                    onClick={acessarLink}
                    w={"306px"}
                    bg={"azul.700"}
                    textColor={"white"}
                    _hover={{
                        opacity:"0.7"
                    }}
                    >
                    
                    Acessar
                </Button>
            </CardFooter>
        </Card>
    );

}
export default CardProjeto; 
