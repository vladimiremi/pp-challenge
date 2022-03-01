import { Avatar, Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { SidebarNavProvider } from "context/SidebarContext";

import { Sidebar } from "components/Sidebar";
import { TopBar } from "components/TopBar";

export const BaseLayout: React.FC = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <SidebarNavProvider>
      <Head>
        <title>Pedigo Pago | Dashboard</title>
      </Head>

      <TopBar />

      <Flex>
        <Sidebar />

        <Flex
          flex={1}
          zIndex="3"
          maxH="90vh"
          boxSizing="border-box"
          overflowY="auto"
          p="1rem 10px"
          justifyContent="center"
          alignContent="center"
        >
          {children}
        </Flex>
      </Flex>
    </SidebarNavProvider>
  );
};
