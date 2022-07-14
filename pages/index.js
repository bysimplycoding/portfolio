import Homepage from "../components/homepage";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Layout>
      <Homepage />
      <Projects />
    </Layout>
  );
}
