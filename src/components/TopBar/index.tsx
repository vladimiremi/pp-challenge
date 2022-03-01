import { Avatar, Box, Flex } from "@chakra-ui/react";
import { Logo } from "assets/icons/icons";

export function TopBar() {
  return (
    <Flex
      w="100%"
      border="2px solid #EAEFED"
      justifyContent="space-between"
      bg="#FFFFFF"
    >
      <Box p="2" borderRight="2px solid #EAEFED" px="7">
        <Logo />
      </Box>
      <Flex borderLeft="2px solid #EAEFED" pl="2" p="2">
        <Avatar bg="#B5F1DD" color="" name="Luiz Zlochevsky" mx="2" />
        <div>
          <h4>Luiz Zlochevsky</h4>
          <text>meus dados</text>
        </div>
      </Flex>
    </Flex>
  );
}
