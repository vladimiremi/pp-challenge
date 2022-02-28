import { SearchIcon } from "assets/icons/icons";
import { Nav } from "components/Nav";
import { SearchInput } from "components/SearchInput";
import { AccordionList } from "components/AccordionList";
import { Table } from "components/Table";
import Head from "next/head";
import Image from "next/image";
import { GlobalStyle } from "styles/global";
import { useWindowSize } from "utils/screenSize";
import { ContainerDesktop, ContainerMobile } from "./styles";

export default function Home() {
  const [width, height] = useWindowSize();
  return (
    <>
      {width > 1080 ? (
        <ContainerDesktop>
          <h1>Organização</h1>

          <div className="container-desktop">
            <Nav />
            <SearchInput
              label="Pesquise por"
              icon={<SearchIcon />}
              placeholder="Pesquisar por nome"
            />

            <h4>Listagem de colaboradores</h4>

            <Table />
          </div>
        </ContainerDesktop>
      ) : (
        <ContainerMobile>
          <h1>Colaboradores</h1>
          <section className="container-mobile">
            <section>
              <Nav />
              <SearchInput
                label="Pesquise por"
                icon={<SearchIcon />}
                placeholder="Pesquisar por nome"
              />
            </section>

            <AccordionList />
          </section>
        </ContainerMobile>
      )}
    </>
  );
}
