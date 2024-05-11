import { Flex, Text } from "@chakra-ui/react";

const SobreMim = () => {

    return (
        <Flex lineHeight={"44.28px"} flexDirection={"column"} w={"360px"}>
            <Text fontSize={"2xl"} fontFamily={"supermolotBold"}>
                Sobre mim
            </Text>
            <Flex gap={4} flexDirection={"column"} fontSize={"md"} fontFamily={"robotoFlex"} lineHeight={"18.75px"}>
                <Text>
                    Em 2022, decidi me arriscar no universo do Desenvolvimento de Software, abandonando meu antigo emprego e minha vaga no curso de Medicina Veterinária na UFMG, mas com a certeza de que essa jornada valeria o preço. Acompanhado de erros e acertos, e companheiros que me ajudaram pelo caminho, minha jornada se manteve de pé através da confiança de que perseverar era a certeza de que eu alcançaria meus objetivos.
                </Text>
                <Text>
                    Em 2023, ingressei no curso de Análise e Desenvolvimento de Sistemas no mesmo momento em que conseguia ingressar na DBServer através do programa StartDB, onde passei por diferentes capacitações em Back-End com Java, Front-End com React, Qualidade e Metodologias Ágeis.
                </Text>
                <Text>
                    Atualmente estou na unidade Ar da DBServer, aprendendo continuamente, e crescendo cada dia mais profissionalmente e como pessoa.
                </Text>

            </Flex>
        </Flex>
    );

}
export default SobreMim; 
