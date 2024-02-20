import Tabs from "./components/global/Tabs";
import Channels from "./pages/Channels";
import Channel from "./pages/Channel";
import ThemeToggle from "./components/global/ThemeToggle";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <Tabs
        children={[<Channels key={uuidv4()} />, <Channel key={uuidv4()} />]}
        tabList={["Channels", "Create Channel"]}
      />
    </div>
  );
};

export default App;
