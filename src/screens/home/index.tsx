import layouts from "../../layouts";
import homeComponents from "./components";

type HomeProps = {};

function Home({}: HomeProps) {
  return (
    <layouts.General>
      <>
        <homeComponents.Hero />
        <homeComponents.Calendar />
        <homeComponents.Content />
        <homeComponents.TeamMembers />
      </>
    </layouts.General>
  );
}

export default Home;
