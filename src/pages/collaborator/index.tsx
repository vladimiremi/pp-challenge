import { Eye, Options, SearchIcon, Trash } from "assets/icons/icons";
import { Nav } from "components/Nav";
import { SearchInput } from "components/SearchInput";
import { AccordionList } from "components/AccordionList";
import { Table } from "components/Table";
import { useWindowSize } from "utils/screenSize";
import { ContainerDesktop, ContainerMobile } from "styles/pages";
import { useEffect, useRef, useState } from "react";
import { api } from "services/api";
import Image from "next/image";
import { Popover } from "components/Popover";

interface AgentesProps {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

export default function Home({ data }) {
  const [width, height] = useWindowSize();
  const initRef = useRef();

  const [agents, setAgents] = useState<AgentesProps[]>(data);
  const [filtered, setFiltered] = useState([]);

  const [reload, setReload] = useState(false);

  const columns = [
    {
      Header: "Nome completo",
      accessor: "name",
    },
    {
      Header: "Departamento",
      accessor: "department",
    },
    {
      Header: "Cargo",
      accessor: "role",
    },

    {
      Header: "Unidade",
      accessor: "branch",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "",
      accessor: "actions",
    },
  ];

  const filterAgents = (searchText: string) => {
    setFiltered(
      agents.filter((agent) =>
        agent.name.toUpperCase().includes(searchText.toUpperCase())
      )
    );
  };

  const DATA = filtered.length > 0 ? [...filtered] : [...agents];
  return (
    <>
      {width > 1180 ? (
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

            <Table columns={columns}>
              {DATA.map((agent) => (
                <tr
                  style={
                    agent.status === "inactive"
                      ? { opacity: "0.5" }
                      : { opacity: "1" }
                  }
                  key={agent.agent_id}
                >
                  <td>
                    <div>
                      <Image
                        width={35}
                        height={35}
                        alt={agent.name}
                        src={agent.image}
                      />
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
                    <Popover />
                  </td>
                </tr>
              ))}
            </Table>
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

            <AccordionList
              type="collaborator"
              data={filtered.length > 0 ? filtered : agents}
            />
          </section>
        </ContainerMobile>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const { data: resp } = await api.get("agents");
  return { props: { data: resp.items } };
}
