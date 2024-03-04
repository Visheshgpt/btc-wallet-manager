import { mnemonicToSeed, validateMnemonic } from "bip39";
import { payments, networks } from "bitcoinjs-lib";
import { BIP32Factory } from "bip32";
import ecc from "tiny-secp256k1";

export const getAddress = async (seedPhrase) => {
  try {
    if (!validateMnemonic(seedPhrase)) {
      throw new Error("Invalid seed phrase");
    }
    const seed = await mnemonicToSeed(seedPhrase);
    const network = networks.testnet;
    const root = BIP32Factory(ecc).fromSeed(seed);
    const accountNode = root.derivePath("m/44'/1'/0'"); // Derivation path for BIP44 / BTC-Testnet / first account
    const changeNode = accountNode.derive(0); // external chain
    const addressNode = changeNode.derive(0); // first address
    const payment = payments.p2pkh({ pubkey: addressNode.publicKey, network });
    return payment?.address;
  } catch (error) {
    throw error;
  }
};
