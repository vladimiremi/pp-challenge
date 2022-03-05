import { Eye, Options, SearchIcon, Trash } from "assets/icons/icons";
import { Nav } from "components/Nav";
import { SearchInput } from "components/SearchInput";
import { AccordionList } from "components/AccordionList";
import { Table } from "components/Table";
import { useWindowSize } from "utils/screenSize";
import { ContainerDesktop, ContainerMobile } from "styles/pages";
import { useEffect, useState } from "react";
import { api } from "services/api";
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

  const [roles, setRules] = useState<AgentesProps[]>(data);
  const [filtered, setFiltered] = useState([]);

  const columns = [
    {
      Header: "Cargo",
      accessor: "name",
    },
    {
      Header: "Departamento",
      accessor: "department",
    },
    {
      Header: "Colaboradores",
      accessor: "agents_quantity",
    },

    {
      Header: "",
      accessor: "actions",
    },
  ];

  const filterAgents = (searchText: string) => {
    setFiltered(
      roles.filter((role) =>
        role.name.toUpperCase().includes(searchText.toUpperCase())
      )
    );
  };

  const DATA = filtered.length > 0 ? [...filtered] : [...roles];
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

            <h4>Listagem de cagos</h4>

            <Table columns={columns}>
              {DATA.map((role, index) => (
                <tr key={index}>
                  <td>{role.name}</td>
                  <td>{role.departament}</td>
                  <td>{role.agents_quantity}</td>
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
              type="roles"
              data={filtered.length > 0 ? filtered : roles}
            />
          </section>
        </ContainerMobile>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const { data: resp } = await api.get("roles");

  return { props: { data: resp.roles } };
}
