import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, useRef } from "react";
import logoImg from "../../assets/logo.svg";
import { ActiveLink } from "./ActiveLink";
import { Container, Content, Active } from "./styles";

export function Nav() {
  const { asPath } = useRouter();

  const navConfig = [
    {
      title: "Colaboradores",
      href: "/collaborator",
    },
    {
      title: "Cargos",
      href: "/roles",
    },
  ];
  return (
    <Container>
      <Content>
        {/* <img src={logoImg} alt=""/> */}
        {navConfig.map((item, index) => (
          <ActiveLink key={index} href={item.href}>
            <div key={index}>
              <Link href={item.href} passHref>
                {item.title}
              </Link>
            </div>
          </ActiveLink>
        ))}
      </Content>
    </Container>
  );
}
