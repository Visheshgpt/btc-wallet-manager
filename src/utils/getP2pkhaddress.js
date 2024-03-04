import { mnemonicToSeed } from "bip39";
import { payments, networks } from "bitcoinjs-lib";
import { BIP32Factory } from "bip32";
import ecc from "tiny-secp256k1";

export const getAddress = async (seedPhrase) => {
  const seed = await mnemonicToSeed(seedPhrase);
  const network = networks.testnet;
  const root = BIP32Factory(ecc).fromSeed(seed);
  const accountNode = root.derivePath("m/44'/1'/0'");
  const changeNode = accountNode.derive(0);
  const addressNode = changeNode.derive(0);
  const payment = payments.p2pkh({ pubkey: addressNode.publicKey, network });
  return payment.address;
};

