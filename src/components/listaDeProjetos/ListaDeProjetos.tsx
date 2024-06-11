import CardProjeto from "../../components/cardProjeto/CardProjeto";
import votacaoBackend from "../../assets/votacaoBackend.svg"
import votacaoFrontend from "../../assets/votacaoFrontend.svg"
import imagemApi from "../../assets/imagemApi.svg"
import imagemTestes from "../../assets/imagemTestes.svg"
import telefone from "../../assets/telefone.svg"
import { Flex } from "@chakra-ui/react";

const ListaDeProjetos = () => {
    const VOTACAO_BACKEND = "https://github.com/Pedro-Cecilio/votacao-react-java-Backend";
    const VOTACAO_FRONTEND = "https://github.com/Pedro-Cecilio/votacao-react-java-Frontend";
    const VOTACAO_RESTASSURED = "https://github.com/Pedro-Cecilio/votacao-react-java-RestAssured";
    const VOTACAO_SELENIUM = "https://github.com/Pedro-Cecilio/votacao-react-java-Selenium";
    const AGENDA_TELEFONICA = "https://github.com/Pedro-Cecilio/agenda-telefonica-backend";
    return (
        <Flex justifyContent={"center"} wrap={"wrap"} gap={20}>
            <CardProjeto
                imagem={votacaoBackend}
                alt="Imagem com texto Vote"
                titulo="Votação Back-End"
                tecnologias="Spring Boot, Spring Security, Postgres"
                descricao="O Projeto Votação Back-end é uma solução que simplifica a gestão e participação em votações. Administradores podem criar e gerenciar usuários, pautas e sessões de votação."
                link={VOTACAO_BACKEND}
            />
            <CardProjeto
                imagem={votacaoFrontend}
                alt="Imagem pagina votação front-end"
                titulo="Votação Front-End"
                tecnologias="React, Typescript, Chakra UI"
                descricao="O Projeto Votação Front-end é uma aplicação que consome a api Votação Back-end, permitindo ao usuário interagir de forma inutitiva e simplificada com essa api."
                link={VOTACAO_FRONTEND}
            />
            <CardProjeto
                imagem={imagemApi}
                alt="Imagem simbolizando uma api"
                titulo="Votação testes E2E Api"
                tecnologias="Java, RestAssured"
                descricao="Esse projeto tem como objetivo fornecer testes de ponta a ponta para a api Votação Backend, permitindo validar o bom funcionamento da api."
                link={VOTACAO_RESTASSURED}
            />
            <CardProjeto
                imagem={imagemTestes}
                alt="Imagem simbolizando testes de uma aplicação"
                titulo="Votação testes E2E"
                tecnologias="Java, Selenium"
                descricao="Esse projeto tem como objetivo fornecer testes E2E para Votação Front-end e Votação Back-end, permitindo validar o bom funcionament da aplicação como um todo."
                link={VOTACAO_SELENIUM}
            />
            <CardProjeto
                imagem={telefone}
                alt="Telefone antigo preto"
                titulo="Agenda telefônica NodeJS"
                tecnologias="NodeJS, Typescript, Fastify"
                descricao="Este projeto é uma aplicação de agenda telefônica utilizando Fastify, onde é possível gerenciar contatos e seus respectivos telefones."
                link={AGENDA_TELEFONICA}
            />
        </Flex>
    );

}
export default ListaDeProjetos; 
