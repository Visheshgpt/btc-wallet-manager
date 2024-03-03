// import { mnemonicToSeed } from "bip39";
// import { payments, networks } from "bitcoinjs-lib";
// import {BIP32Factory} from "bip32";
// import ecc from "tiny-secp256k1";

// export const getAddress = async(seedPhrase) => {
//   const seed = await mnemonicToSeed(seedPhrase);
//   // console.log("seed", seed);
 
//   // Specify the testnet network parameters
//   const network = networks.testnet;

//   const root = BIP32Factory(ecc).fromSeed(seed);
//   // console.log("root", root);

//   const accountNode = root.derivePath("m/44'/1'/0'"); // Derivation path for Bitcoin testnet
//   // console.log("accountNode", accountNode);

//   // Derive the first external change address (node at index 0)
//   const changeNode = accountNode.derive(0);

//   // Derive the first address from the change node
//   const addressNode = changeNode.derive(0);
  
//   // Create a P2PKH (Pay to Public Key Hash) payment object
//   const payment = payments.p2pkh({
//     pubkey: addressNode.publicKey,
//     network,
//   });

//   return payment.address;
// }