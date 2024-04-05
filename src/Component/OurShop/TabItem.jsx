import useMenu from "../../Hooks/useMenu";
import ItemCard from "./ItemCard";


const TabItem = ({menuItem}) => {
    const [menu]=useMenu()
    const items=menu.filter(item=>item?.category===menuItem)
    console.log(items)
    return (
       
            <div className='grid grid-cols-3 gap-10 mt-10'>
                        {
                            items?.map(item=><ItemCard key={item?._id} item={item}></ItemCard>)
                        }
                    </div>
        
    );
};

export default TabItem;