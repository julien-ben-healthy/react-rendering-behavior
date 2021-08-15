import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Simple from "./examples/1-simple";
import Stateful from "./examples/2-stateful";
import Memo from "./examples/3-memo";

const tabs = { Simple, Stateful, Memo };

export default () => (
  <Tabs>
    <TabList>
      {Object.keys(tabs).map((name) => (
        <Tab key={name}>{name}</Tab>
      ))}
    </TabList>
    {Object.entries(tabs).map(([name, Component]) => (
      <TabPanel key={name}>
        <Component />
      </TabPanel>
    ))}
  </Tabs>
);
