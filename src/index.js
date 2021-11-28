import Web3 from 'web3';

window.onload = function() {
    // Variables
    let web3;
    let from;

    // Elements
    const connectButton = document.getElementById('connect');
    const content = document.getElementById('content');
    const account = document.getElementById('account');

    // Functions
    const connect = async function() {
        if(window.ethereum) {
           await window.ethereum.request({method: 'eth_requestAccounts'});

            web3 = new Web3(window.ethereum);

            let accounts = await web3.eth.getAccounts();

            from = accounts[0];


           content.style.display = 'initial';
           connectButton.style.display = 'none';
           account.innerText = from
        } else {
            alert('No tienes metamask, mamonazo')
        }
    }

    // Listeners
    connectButton.onclick = connect;
}