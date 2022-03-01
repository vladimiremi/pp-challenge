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
import { useRef } from "react";
import { ContainerTAble } from "./styles";

interface ColumnsProps {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: ColumnsProps[];
  children: any;
}

export function Table({ children, columns }: TableProps) {
  return (
    <ContainerTAble>
      <table>
        <thead>
          <tr>
            {columns.map((collumn, index) => (
              <th key={index}>{collumn.Header}</th>
            ))}

            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Text fontWeight="400" fontSize="1rem" mr="3">
            {" "}
            Mostando 10 de 10 registros
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
    </ContainerTAble>
  );
}
