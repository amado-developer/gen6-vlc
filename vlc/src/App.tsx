import Tabs from "./components/global/tabs";
import Channels from "./components/channels";
import ThemeToggle from "./components/global/themeToggle";

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <Tabs
        children={[<Channels />, <div>Table</div>, <div>Form</div>]}
        tabList={["Channels", "Edit Channel", "Create Channel"]}
      />
    </div>
  );
};

export default App;
