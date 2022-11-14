import React, { useState } from "react";
import Modal from "./Modal.js"
import Footer from "./Footer.js"
import Nav from "./Nav.js"

export default function Place(){
    const [openModal, setOpenModal] = useState(false)
    return(
        <div id="parent2">
             {openModal && <Modal closeModal={setOpenModal} />}
    <div id="folder">
                <Nav open={setOpenModal} />           
            <div id="folder2">
            <div id="container4">
            <div id="header4_text">
            <ul id="ul_items4">
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantastic city</li>
                <li>beach</li>
                <li>Cabins</li>
                <li>Off-grid</li>
                <li>farms</li>
            </ul>
            
            <div id="header_location">Location
            <img src="/assets/settings.PNG" alt="" id="settings"></img>
            </div>
            </div>
        <div id="images_desert2">
            <div id="desert1_con">
                <img src="/assets/desert1.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            
            <div id="desert2_con">
                <img src="/assets/desert2.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>  
            <div id="desert3_con">
                <img src="/assets/desert3.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>  
            <div id="desert4_con">
                <img src="/assets/desert4.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>  
            <div id="desert9_con">
                <img src="/assets/desert9.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>  
            <div id="desert10_con">
                <img src="/assets/desert10.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            <div id="desert11_con">
                <img src="/assets/desert11.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            <div id="desert12_con">
                <img src="/assets/desert12.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div> 
            <div id="desert13_con">
                <img src="/assets/desert13.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            <div id="desert14_con">
                <img src="/assets/desert14.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            <div id="desert15_con">
                <img src="/assets/desert16.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
            <div id="desert16_con">
                <img src="/assets/desert16.png" alt="" id="desert_img"></img>
                <div id="desert-img_details">
                    <div id="d1">
                        <div id="d1_king">Desert King</div>
                        <div id="d1_night">1MBT per night</div>
                    </div>
                    <div id="d2">
                        <div id="d2_km">2345km away</div>
                        <div id="d2_availabilty">available for two weeks</div>
                    </div>
                    <div id="d3"><img src="/assets/star.png" alt=""></img></div>
                </div>
            </div>
                        
        </div>
        
        </div> 
            
        <Footer />
        </div>
    </div>
    </div>
    
    

    )
}