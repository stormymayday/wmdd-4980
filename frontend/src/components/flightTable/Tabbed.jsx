import { useState } from 'react';
import Tab from './Tab';

function Tabbed() {
  const [activeTab, setActiveTab] = useState('');
  console.log(activeTab);

  return (
    <>
      <Tab
        value="In Progress"
        num={0}
        activeTab={activeTab}
        onClick={setActiveTab}
      >
        In Progress
      </Tab>
      <Tab value="Done" num={1} activeTab={activeTab} onClick={setActiveTab}>
        Done
      </Tab>
      <Tab value="Delay" num={2} activeTab={activeTab} onClick={setActiveTab}>
        Delay
      </Tab>
      <Tab value="Cancel" num={3} activeTab={activeTab} onClick={setActiveTab}>
        Cancel
      </Tab>
    </>
  );
}

export default Tabbed;
