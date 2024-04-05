import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import ItemCard from './ItemCard';
import TabItem from './TabItem';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MenuTabs = () => {
    const categorys=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams();
    let selectedItem=categorys.indexOf(`${category}`)
    
    console.log(category)
    if (selectedItem<0) {
        selectedItem=0
    }
    const [tabIndex, setTabIndex] = useState(selectedItem);
    // console.log(tabIndex)
    // setTabIndex(selectedItem)
    return (
        <div>
            <Tabs defaultIndex={tabIndex}>
                <TabList  className={"uppercase"}>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
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