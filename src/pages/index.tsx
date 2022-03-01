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
import { useEffect, useState } from "react";
import { api } from "services/api";

interface AgentesProps {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export default function Home() {
  const [width, height] = useWindowSize();

  const [agents, setAgents] = useState<AgentesProps[]>([]);
  const [filtered, setFiltered] = useState([]);

  const [reload, setReload] = useState(false);

  const filterAgents = (searchText: string) => {
    setFiltered(
      agents.filter((agent) =>
        agent.name.toUpperCase().includes(searchText.toUpperCase())
      )
    );
  };

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
  }, [reload]);
  return (
    <>
      {width > 1080 ? (
        <ContainerDesktop>
          <h1>Organização</h1>

          <div className="container-desktop">
            <Nav />
            <SearchInput
              onChange={(e) => filterAgents(e.target.value)}
              label="Pesquise por"
              icon={<SearchIcon />}
              placeholder="Pesquisar por nome"
            />

            <h4>Listagem de colaboradores</h4>

            <Table agents={filtered.length > 0 ? filtered : agents} />
          </div>
        </ContainerDesktop>
      ) : (
        <ContainerMobile>
          <h1>Colaboradores</h1>
          <section className="container-mobile">
            <section>
              <Nav />
              <SearchInput
                onChange={(e) => filterAgents(e.target.value)}
                label="Pesquise por"
                icon={<SearchIcon />}
                placeholder="Pesquisar por nome"
              />
            </section>

            <AccordionList agents={filtered.length > 0 ? filtered : agents} />
          </section>
        </ContainerMobile>
      )}
    </>
  );
}
