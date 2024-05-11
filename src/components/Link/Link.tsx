import { Box } from "@chakra-ui/react";
import { ReactNode } from 'react';
interface LinkProps {
    children: ReactNode;
    onClick: () => void;
}
const Link = ({ children, onClick }: LinkProps) => {

    return (
        <Box
            onClick={onClick}
            cursor={"pointer"}
            textColor={"azul.700"} fontWeight={400}
            display={'flex'}
            flex={1}
            justifyContent={"center"}
            p={2}
            rounded={"8px"}
            fontSize={"18px"}>
            {children}
        </Box>
    );

}
export default Link; 
