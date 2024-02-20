import Tabs from "./components/global/Tabs";
import Channels from "./pages/Channels";
import Channel from "./pages/Channel";
import ThemeToggle from "./components/global/ThemeToggle";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const App = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [channelID, setChannelID] = useState<string>("");
  return (
    <div className="App">
      <ThemeToggle />
      <Tabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        children={[
          <Channels
            key={uuidv4()}
            setCurrentTab={setCurrentTab}
            setChannelID={setChannelID}
          />,
          <Channel key={uuidv4()} />,
          <Channel key={uuidv4()} isEdit={true} channelId={channelID} />,
        ]}
        tabList={["Channels", "Create Channel", "Edit Channel"]}
      />
    </div>
  );
};

export default App;
