import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from 'react';
interface LinkProps {
    to: string;
    children: ReactNode;
    backgroundColor?: string;
    novaAba?: boolean;
}
const Link = ({ to, children, backgroundColor = "azul.200", novaAba = false }: LinkProps) => {

    return (
        <ChakraLink
            target={novaAba ? "_blank" : "_self"}
            as={ReactRouterLink}
            to={to}
            _hover={{ textDecoration: "none", backgroundColor: backgroundColor }}
            textColor={"azul.700"} fontWeight={400}
            display={'flex'}
            flex={1}
            justifyContent={"center"}
            p={2}
            rounded={"8px"}
            fontSize={"18px"}>
            {children}
        </ChakraLink>
    );

}
export default Link; 
