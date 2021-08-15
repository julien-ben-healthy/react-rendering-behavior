import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Simple from "./examples/1-simple";
import Stateful from "./examples/2-stateful";
import Memo from "./examples/3-memo";
import Siblings from "./examples/4-siblings";
import MemoWithProps from "./examples/5-memo-with-props";

const tabs = { Simple, Stateful, Memo, Siblings, "Memo With Props": MemoWithProps };

export default () => (
  <Tabs>
    <TabList>
      {Object.keys(tabs).map((name, index) => (
        <Tab key={name}>{index + 1}. {name}</Tab>
      ))}
    </TabList>
    {Object.entries(tabs).map(([name, Component]) => (
      <TabPanel key={name}>
        <Component />
      </TabPanel>
    ))}
  </Tabs>
);
