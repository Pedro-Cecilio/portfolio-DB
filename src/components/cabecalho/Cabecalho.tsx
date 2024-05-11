import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import Logo from "../logo/Logo";
import Link from "../Link/Link";
import gitHub from "../../assets/gitHub.svg"
import linkedin from "../../assets/linkedin.svg"
import { ExternalLinkIcon, HamburgerIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Cabecalho = () => {
    const GIT_HUB = "https://github.com/Pedro-Cecilio";
    const LINKEDIN = "https://www.linkedin.com/in/pedro-cecilio-8978aa281/";
    const navigate = useNavigate();
    const mostrarMenuBurger = useBreakpointValue<boolean>({ base: true, md: false }, {
        ssr: false
    });

    const navegarProjetos = ()=>{
        navigate("/projetos");
    }
    const navegarSobre = ()=>{
        navigate("/");
    }
    const navegarCurriculo = ()=>{
        navigate("/");
    }
    const navegarGitHub = ()=>{
        window.open(GIT_HUB);
    }
    const navegarLinkedin = ()=>{
        window.open(LINKEDIN);
    }


    return (
        <Flex bg={"azul.100"} h={"87px"} fontFamily={"supermolotBold"} pl={8} pr={10} mb={"70px"} justifyContent={"space-between"}>
            <Flex mr={8}>
                <Link to="https://db.tec.br/" backgroundColor="none"><Logo /></Link>
            </Flex>

            {mostrarMenuBurger ?

                <Box alignSelf={"center"}>
                    <Menu>
                        <MenuButton
                            color={"white"}
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            bg={"azul.700"}
                            _hover={{ backgroundColor: "white", color: "azul.700" }}
                            _active={{ backgroundColor: "branco", color: "preto" }}
                        />
                        <MenuList bg={"azul.200"} >

                            <MenuItem icon={<InfoOutlineIcon />} bg={"azul.200"} _hover={{ backgroundColor: "white", color: "azul.700" }} fontWeight={"bold"} p={4} onClick={navegarSobre}>
                                Sobre
                            </MenuItem>

                            <MenuItem icon={<ExternalLinkIcon />} bg={"azul.200"} _hover={{ backgroundColor: "white", color: "azul.700" }} fontWeight={"bold"} p={4} onClick={navegarCurriculo}>
                                Curriculo
                            </MenuItem>

                            <MenuItem icon={<StarIcon />} bg={"azul.200"} _hover={{ backgroundColor: "white", color: "azul.700" }} fontWeight={"bold"} p={4} onClick={navegarProjetos}>
                                Projetos
                            </MenuItem>

                            <MenuItem icon={<ExternalLinkIcon />} bg={"azul.200"} _hover={{ backgroundColor: "white", color: "azul.700" }} fontWeight={"bold"} p={4}onClick={navegarGitHub}>
                                GitHub
                            </MenuItem>

                            <MenuItem icon={<ExternalLinkIcon />} bg={"azul.200"} _hover={{ backgroundColor: "white", color: "azul.700" }} fontWeight={"bold"} p={4} onClick={navegarLinkedin}>
                                Linkedin
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                :
                <Flex justifyContent={"space-between"} alignItems={"center"} wrap={"wrap"} w={"full"}>
                    <Flex justifyContent={"space-around"} gap={8}>
                        <Flex alignItems={"center"} justifyContent={"space-between"} gap={8}>
                            <Link to={"/"}>Sobre</Link>
                            <Link to={"/"}>Curriculo</Link>
                            <Link to={"/projetos"}>Projetos</Link>
                        </Flex>
                    </Flex>


                    <Flex alignItems={"center"} gap={4} w={"8rem"} h={"2.75rem"}>
                        <Link to={GIT_HUB} novaAba={true}><Image src={gitHub} w={6} /></Link>
                        <Link to={LINKEDIN} novaAba={true}><Image src={linkedin} w={6} /></Link>
                    </Flex>
                </Flex >
            }
        </Flex>




    );



}
export default Cabecalho; 
