import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu,setmenu]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>setmenu(data))
    },[])
    return [menu]
};

export default useMenu;