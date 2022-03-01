import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ActionsIcon, RefreshIcon } from "assets/icons/icons";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { api } from "services/api";
import { Informations, Section } from "./styles";

interface AgentesProps {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

interface AccordionListProps {
  agents: AgentesProps[];
}

export function AccordionList({ agents }: AccordionListProps) {
  const [borderGreen, setBorderGreen] = useState<number>(0);

  return (
    <>
      <Section>
        <section>
          <h4>Listagem de colaboradores</h4>
          <Accordion
            onChange={(e) => setBorderGreen(Number(e))}
            defaultIndex={[0]}
            allowMultiple
          >
            {agents.map((agent, index) => (
              <AccordionItem
                opacity={agent.status === "inactive" ? "0.5" : "1"}
                key={agent.agent_id}
                mb="2"
                p="1"
                borderRadius="0.5rem"
                border={`2px solid ${
                  borderGreen === index ? "#B5F1DD" : "#EAEFED"
                }`}
              >
                <h2>
                  <AccordionButton
                    _expanded={{
                      boxShadow: "0 0 0 0",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text mb="2" fontWeight="600" color="#587169">
                        {" "}
                        Nome completo
                      </Text>
                      <Flex alignItems="center">
                        <Avatar
                          border={`2px solid ${
                            borderGreen === index ? "#1DD195" : "#EAEFED"
                          }`}
                          mr="1"
                          size="md"
                          src={agent.image}
                          name="Vladimir Costa"
                        />
                        <Text fontWeight="600" color="#587169">
                          {agent.name}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Informations>
                    <div>
                      <div>
                        <div>
                          <label>Departamento</label>
                          <text>{agent.department}</text>
                        </div>
                        <div>
                          <label>Unidade</label>
                          <text>{agent.branch}</text>
                        </div>
                        <div className={agent.status}>
                          <label>Status</label>
                          <div>
                            <text>{agent.status}</text>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div>
                          <label>Cargo</label>
                          <text>{agent.role}</text>
                        </div>
                        <div>
                          <label>Unidade</label>
                          <text>{agent.branch}</text>
                        </div>
                      </div>
                    </div>

                    <Button icon={<ActionsIcon />} label="Ações" />
                  </Informations>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Button icon={<RefreshIcon />} label="Carregar mais" />
        </section>
      </Section>
    </>
  );
}
