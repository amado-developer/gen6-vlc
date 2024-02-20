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
};

const SimpleTabs = ({ tabList, children }: TabsProps) => {
  return (
    <Container as="section" maxWidth="1400px">
      <Tabs size="lg">
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
