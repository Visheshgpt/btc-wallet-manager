import React, { useState } from "react";
// import syncQueue from "@/utils/queue"
// import { getAddress } from "@/utils/getP2pkhaddress"

const Modal = ({ isOpen, onClose, handleAddWalletQueue, children }) => {
  const [walletName, setWalletName] = useState("");
  const [mnemonic, setMnemonic] = useState("");

  if (!isOpen) return null;

  const handleAddWallet = async () => {
    // const address = await getAddress(mnemonic)
    // console.log("address", address);

    handleAddWalletQueue(mnemonic, walletName);
    setWalletName("");
    setMnemonic("");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 text-white">
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-[#171C23] w-8/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-center px-6">
          <div className="flex text-center justify-center items-center pb-3">
            <p className="text-[20px] font-semibold text-white w-full">
              Import Wallet
            </p>
            <button
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            >
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M6.728 8.999L0 15.728l1.272 1.272L8 10.27l6.728 6.73 1.272-1.272L9.273 8.999l6.729-6.728L14.728.999 8 7.728 1.272.999z" />
              </svg>
            </button>
          </div>
          <div className="text-left w-full">
            <p className="text-[#A6A2A2] text-[14px]">
              Enter your wallet name :
            </p>
            <input
              type="text"
              onChange={(e) => setWalletName(e.target.value)}
              className="bg-[#20242B] rounded-sm w-full p-1 mt-2 border-[#C5C5C545]"
            />
          </div>
          <div className="text-left w-full mt-2">
            <p className="text-[#A6A2A2] text-[14px]">Enter your Mnemonic :</p>
            <textarea
              onChange={(e) => setMnemonic(e.target.value)}
              className="bg-[#20242B] rounded-sm w-full p-1 mt-2 border-[#C5C5C545]"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              onClick={handleAddWallet}
              className="bg-[#DB953C] font-semibold px-4 py-2 my-5 rounded-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
