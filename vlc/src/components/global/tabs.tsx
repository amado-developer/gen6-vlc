import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";

type TabsProps = {
  children: React.ReactNode[];
  tabList: String[];
  currentTab: number;
  setCurrentTab: (tab: number) => void;
};

const SimpleTabs = ({
  tabList,
  children,
  currentTab,
  setCurrentTab,
}: TabsProps) => {
  return (
    <Container as="section" maxWidth="1400px">
      <Tabs size="lg" index={currentTab} onChange={(e) => setCurrentTab(e)}>
        <TabList>
          {tabList.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {children.map((child, index) => (
            <TabPanel key={index}>{child}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default SimpleTabs;
