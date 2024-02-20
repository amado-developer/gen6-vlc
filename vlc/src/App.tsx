import Tabs from "./components/global/Tabs";
import Channels from "./pages/Channels";
import AddChannel from "./pages/AddChannel";
import ThemeToggle from "./components/global/ThemeToggle";

import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <Tabs
        children={[<Channels key={uuidv4()} />, <AddChannel key={uuidv4()} />]}
        tabList={["Channels", "Create Channel", "Edit Channel", "User View"]}
      />
    </div>
  );
};

export default App;
