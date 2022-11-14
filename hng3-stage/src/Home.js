import React, { useState } from "react";
import Modal from "./Modal.js"
import Footer from "./Footer.js"
import Nav from "./Nav.js";

function Home(){
    const [openModal, setOpenModal] = useState(false)
    return(
    <div>
        {openModal && <Modal closeModal={setOpenModal} />}
    <div id="parent"> 
         
        <div id="container">
        <Nav open={setOpenModal} />            
            <div id="main">
                <div id="main_sub">
                    <div id="h">Rent a <span id="text_color">Place</span> away from <span id="text_color">Home</span> in the <span id="text_color">Metaverse</span></div>
                    <div id="p">we provide you access to luxury and affordable houses
                     in the metaverse, get a chance to turn your 
                     imagination to reality at your comfort zone</div>
                    <div id="">
                        <form >
                        <input type="text" placeholder ="search location" id="input"></input>
                        <button type="submit" id="btn">search</button>
                        </form>
                    </div>
                </div>
                <div id="main_diagrams">
                    <div id="img1">
                    <img src="/assets/meta_logo1.png" alt="" id="meta_logo1"></img>
                    <img src="/assets/meta_logo2.png" alt="" id="meta_logo1"></img>
                    </div>
                    <div id="img2">
                    <img src="/assets/meta_logo3.png" alt="" id="meta_logo1"></img>
                    <img src="/assets/meta_logo4.png" alt="" id="meta_logo1"></img>
                    </div>
                    
                </div>
            </div>         
                
        </div>

        <div id="metamask_bar">
            <div id="MBcoin">
            <img src="/assets/MBCoin.png" alt=""></img>
            MBToken
            </div>
            <div id="MBcat">
                <img src="/assets/MBcat.png" alt=""></img>
                <img src="/assets/metamask.png" alt=""></img>
            </div>
            <div id="opensea_logo">
                <img src="/assets/Opensea_logo.png" alt=""></img>
                OpenSea
            </div>
            
        </div>

        <div id="container2">
            <div id="header2_text">
            Inspiration for your next adventure
            </div>
        <div id="images_desert">
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
            <div id="desert5_con">
                <img src="/assets/desert5.png" alt="" id="desert_img"></img>
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
            <div id="desert6_con">
                <img src="/assets/desert6.png" alt="" id="desert_img"></img>
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
            <div id="desert7_con">
                <img src="/assets/desert7.png" alt="" id="desert_img"></img>
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
            <div id="desert8_con">
                <img src="/assets/desert8.png" alt="" id="desert_img"></img>
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

        <div id="container3">
            <div id="conatiner3_main">
                <div id="container3_main1">
                    <h3>Metabnb NFTs</h3>
                    <div id="main1_note">Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </div>
                    <div id="main1_learn">Learn more</div>
                </div> 
                <div id="conatiner3_main2">
                    <img src="/assets/nft_logo.png" id="nft_logo" alt=""></img>
                </div>               
            </div>
        </div>
        <Footer />
    </div> 
    </div>   
    )
}

export default Home;