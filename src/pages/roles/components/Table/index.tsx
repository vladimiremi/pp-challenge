import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  Eye,
  NextIcon,
  Options,
  PreviousIcon,
  Trash,
} from "assets/icons/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { api } from "services/api";
import { Container } from "./styles";

interface RolesProps {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface TableProps {
  roles: RolesProps[];
}

export function Table({ roles }: TableProps) {
  const initRef = useRef();
  console.log(roles);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Colaboradores</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role.name}</td>
              <td>
                {role.departament}
                {console.log(role.departament)}
              </td>
              <td>{role.agents_quantity}</td>
              <td>
                <Popover
                  closeOnBlur={false}
                  placement="left-start"
                  initialFocusRef={initRef}
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
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Text fontWeight="400" fontSize="1rem" mr="3">
            {" "}
            Mostando {roles.length} de {roles.length} registros
          </Text>
          <Select w="5rem" value="10">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <PreviousIcon />
          <Text p="0 15px" fontWeight="600">
            1 de 1
          </Text>
          <NextIcon />
        </Flex>
      </Flex>
    </Container>
  );
}
