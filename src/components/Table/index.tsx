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
import { useEffect, useRef, useState } from "react";
import { api } from "services/api";
import { Container } from "./styles";

interface AgentesProps {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export function Table() {
  const [agents, setAgents] = useState<AgentesProps[]>([]);
  const initRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const { data: resp } = await api.get("agents");
        console.log(resp);
        setAgents(resp.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Unidade</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.agent_id}>
              <td>
                <div>
                  <img alt={agent.name} src={agent.image}></img>{" "}
                  <text>{agent.name}</text>
                </div>
              </td>
              <td>{agent.department}</td>
              <td>{agent.role}</td>
              <td>{agent.branch}</td>
              <td className={agent.status}>
                <div>{agent.status === "active" ? "Ativo" : "Inativo"}</div>
              </td>
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
            Mostando {agents.length} de {agents.length} registros
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
