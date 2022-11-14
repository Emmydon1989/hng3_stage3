import React from "react";

export default function Footer(){
    return(
        
    <footer>
            <div id="foot1">
                <div id="foot1_meta">
                    <img src="/assets/footer_bnb.png" alt=""></img>
                    <img src="/assets/footer_meta.png" alt="" /> 
                </div>
                <div id="socialmedia">
                    <img src="/assets/facebook.png" alt="" />
                    <img src="/assets/instagram.png" alt="" />
                    <img src="/assets/twitter.png" alt="" />
                </div>
                <div id="copywright">
                    <img src="/assets/copywright.png" alt="" />
                    2022 Metabnb
                </div>
            </div>
            <div id="foot2">
                <div id="community">
                    community
                    <ul id="ul_items">
                        <li>NFTs</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div id="places">
                    Places
                <ul id="ul_items">
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Lerarn more</li>
                    </ul>
                </div>
                <div id="about">
                    About us
                <ul id="ul_items">
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Conatct us</li>
                    </ul>                    
                </div>
            </div>
        </footer>
        
    )
}