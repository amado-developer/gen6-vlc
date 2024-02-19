import Tabs from "./components/global/Tabs";
import Channels from "./components/Channels";
import AddChannel from "./components/AddChannel";
import Timeline from "./components/TimeLine";
import ThemeToggle from "./components/global/ThemeToggle";

import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <Tabs
        children={[
          <Channels key={uuidv4()} />,
          <AddChannel key={uuidv4()} />,
          <Timeline key={uuidv4()} />,
        ]}
        tabList={["Channels", "Create Channel", "Edit Channel"]}
      />
    </div>
  );
};

export default App;
