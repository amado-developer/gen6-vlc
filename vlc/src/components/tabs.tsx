import Channels from "./channels";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";

const tabs = () => {
  return (
    <Container as="section" maxWidth="1400px">
      <Tabs size="lg">
        <TabList>
          <Tab>Channels</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Channels />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default tabs;
