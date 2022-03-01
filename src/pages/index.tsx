import { GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
    redirect: {
      destination: "collaborator",
      permanent: true,
    },
  };
};
