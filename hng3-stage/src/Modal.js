import React from "react";



export default function Modal({closeModal}){
    return(
        <div id="overlay">
            <div id="modal">
                <div id="modalHead">Connect Wallet<span id="closeModal" onClick={() => closeModal(false)}>X</span></div>
                <div id="modalLinks">
                    <div id="metawallet">
                        <p>Choose your preferred wallet:</p>
                        <div id="modalMetamask">
                            <img alt="" src="assets/meta_wallet.png" id="metamaskImg"/>
                            <span>Metamask</span><i class="arrowRight metamaskArrow"></i>
                        </div>  
                        <div id="walletConnect">
                            <img alt="" src="assets/connect_wallet.png" id="walletConnectImg"/>
                            <span>WalletConnect</span><i class="arrowRight"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}