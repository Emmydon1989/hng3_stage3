import React from "react";

export default function Nav({open}){
        return(       
           
             <div id="bar">             
                 <div id="bar_img"><img src="/assets/bnb_house.png" alt=""></img></div>
                <ul id="bar_list">
                    <a href="/"><li>Home</li></a> 
                    <a href="Place"><li>Place to stay</li></a>
                    <li>NFTs</li>
                    <li>Community</li>
                </ul>
                <button  onClick={()=> open(true)} id="connect" >connect wallet</button>
            </div>
        
        
    )   
}



