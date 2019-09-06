import { useEffect,useState } from 'react';

export const useDark = () => {
    const [light,setLight]=useState(false);

    useEffect(()=>{
        
        if (light){
            if (!document.body.classList.contains('dark-mode')){document.body.classList.add('dark-mode');};
            // const linkSelector=document.querySelectorAll(".navLink");
            // linkSelector.forEach(item=>{
            //     item.classList.add("navLinkDark");
            // });
        } else {
            if (document.body.classList.contains('dark-mode')){document.body.classList.remove('dark-mode');};
            // const linkSelector=document.querySelectorAll(".navLink");
            // linkSelector.forEach(item=>{
            //     item.classList.remove("navLinkDark");
            // });
        }
    },[light])

  return [light,setLight];
};