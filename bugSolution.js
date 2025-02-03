async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask installed!');
    return;
  }

  try {
    await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Wallet is connected!');
  } catch (error) {
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.');
    } else {
      console.error('Error connecting to MetaMask:', error);
    }
  }
}