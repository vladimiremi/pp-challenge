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
import { Popover } from "components/Popover";
import { useState } from "react";
import { InformationsAccordion, SectionAccordion } from "./styles";

interface AgentesProps {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
  agents_quantity: number;
  departament: string;
}

interface AccordionListProps {
  data: AgentesProps[];
  type: string;
}

export function AccordionList({ type, data }: AccordionListProps) {
  const [borderGreen, setBorderGreen] = useState<number>(0);

  return (
    <>
      <SectionAccordion>
        <section>
          <h4>
            Listagem de {type === "collaborator" ? "Colaboradores" : "Cargos"}
          </h4>
          <Accordion
            onChange={(e) => setBorderGreen(Number(e))}
            defaultIndex={[0]}
          >
            {data.map((item, index) => (
              <AccordionItem
                opacity={item.status === "inactive" ? "0.5" : "1"}
                key={item.agent_id}
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
                        {type === "collaborator" ? "Nome completo" : "Cargo"}
                      </Text>
                      <Flex alignItems="center">
                        {type === "collaborator" && (
                          <Avatar
                            border={`2px solid ${
                              borderGreen === index ? "#1DD195" : "#EAEFED"
                            }`}
                            mr="1"
                            size="md"
                            src={item.image}
                            name="Vladimir Costa"
                          />
                        )}
                        <Text
                          fontWeight={type === "collaborator" ? "600" : "300"}
                          color="#587169"
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <InformationsAccordion>
                    {type === "collaborator" ? (
                      <div>
                        <div>
                          <div>
                            <label>Departamento</label>
                            <text>{item.department}</text>
                          </div>
                          <div>
                            <label>Unidade</label>
                            <text>{item.branch}</text>
                          </div>
                          <div className={item.status}>
                            <label>Status</label>
                            <div>
                              <text>{item.status}</text>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div>
                            <label>Cargo</label>
                            <text>{item.role}</text>
                          </div>
                          <div>
                            <label>Unidade</label>
                            <text>{item.branch}</text>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div>
                          <div>
                            <label>Colaboradores</label>
                            <text>{item.agents_quantity}</text>
                          </div>
                        </div>

                        <div>
                          <div>
                            <label>Departamento</label>
                            <text>{item.departament}</text>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button icon={<ActionsIcon />} label="Ações" />
                  </InformationsAccordion>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Button icon={<RefreshIcon />} label="Carregar mais" />
        </section>
      </SectionAccordion>
    </>
  );
}
