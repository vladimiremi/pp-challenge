import {
  Box,
  Flex,
  Popover as PopoverChackra,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { Eye, Options, Trash } from "assets/icons/icons";

export function Popover() {
  return (
    <PopoverChackra
      closeOnBlur={false}
      placement="left-start"
      // initialFocusRef={initRef}
    >
      {() => (
        <>
          <PopoverTrigger>
            <Box cursor="pointer">
              <Options />
            </Box>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody>
                <Flex p="5">
                  <Eye /> <Text ml="2">Ver colaborador</Text>
                </Flex>
                <Flex p="5" opacity="0.5">
                  <Trash /> <Text ml="2">Excluir</Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </PopoverChackra>
  );
}
