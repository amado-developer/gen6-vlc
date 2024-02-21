import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeToggle from "../shared/components/ThemeToggle";
import Channels from "../features/VirtualChannels/Channels";
import Channel from "../features/AddVirtualChannel/Channel";

const App = () => {
  return (
    <div className="App">
      <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Channels />} />
          <Route path="/add-channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
