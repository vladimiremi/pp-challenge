import { Avatar } from "@chakra-ui/react";
import { Logo } from "assets/icons/icons";
import { useSidebarNav } from "context/SidebarContext";
import { Container } from "./styles";

export function Sidebar() {
  const { isOpen } = useSidebarNav();

  return <>{isOpen && <Container></Container>}</>;
}
