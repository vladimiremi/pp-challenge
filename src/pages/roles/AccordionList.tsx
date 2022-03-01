import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ActionsIcon, RefreshIcon } from "assets/icons/icons";
import { Button } from "components/Button";
import { useState } from "react";
import { InformationsAccordion, SectionAccordion } from "./styles";

interface RolesProps {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface AccordionListProps {
  roles: RolesProps[];
}

export function AccordionList({ roles }: AccordionListProps) {
  const [borderGreen, setBorderGreen] = useState<number>(0);

  return (
    <>
      <SectionAccordion>
        <section>
          <h4>Listagem de colaboradores</h4>
          <Accordion
            onChange={(e) => setBorderGreen(Number(e))}
            defaultIndex={[0]}
          >
            {roles.map((roles, index) => (
              <AccordionItem
                key={index}
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
                        Cargo
                      </Text>
                      <Flex alignItems="center">
                        <Text color="#587169">{roles.name}</Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <InformationsAccordion>
                    <div>
                      <div>
                        <div>
                          <label>Colaboradores</label>
                          <text>{roles.agents_quantity}</text>
                        </div>
                      </div>

                      <div>
                        <div>
                          <label>Departamento</label>
                          <text>{roles.departament}</text>
                        </div>
                      </div>
                    </div>

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
