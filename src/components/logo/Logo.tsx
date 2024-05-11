import { Image } from "@chakra-ui/react";
import logoDB from "../../assets/logoDB.svg"

const Logo = () => {

    return (
            <Image src={logoDB} alt="Logo DB" w={"87px"} h={"60px"}/>
    );

}
export default Logo; 
