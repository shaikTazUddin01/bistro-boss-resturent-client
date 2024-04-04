import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu,setmenu]=useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setmenu(data))
    },[])
    return [menu]
};

export default useMenu;