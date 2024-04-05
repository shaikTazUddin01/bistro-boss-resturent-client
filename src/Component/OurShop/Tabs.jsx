import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import ItemCard from './ItemCard';
import TabItem from './TabItem';

const MenuTabs = () => {
    
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <TabItem menuItem={'salad'}></TabItem>
                </TabPanel>
                <TabPanel>
                <TabItem menuItem={'pizza'}></TabItem>

                </TabPanel>
                <TabPanel>
                <TabItem menuItem={'soup'}></TabItem>

                </TabPanel>
                <TabPanel>
                <TabItem menuItem={'dessert'}></TabItem>

                </TabPanel>
                <TabPanel>
                <TabItem menuItem={'drinks'}></TabItem>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MenuTabs;