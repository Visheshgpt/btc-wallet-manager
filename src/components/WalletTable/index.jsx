import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../Modal";

const WalletTable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [wallets, setWallets] = useState([]);
  console.log("wallets", wallets);

  const handleDelete = (index) => {
    const updatedWallets = [...wallets];
    updatedWallets.splice(index, 1);
    setWallets(updatedWallets);
  };

  return (
    <div className="pt-5">
      <div className="flex justify-end">
        <button
          className="text-[#BEB4A8] flex gap-2 items-center bg-[#242830] rounded-md p-2 px-4"
          onClick={() => setModalOpen(true)}
        >
          <img src="/assets/ImportAddIcon.png" alt="add-wallet-loading" />{" "}
          IMPORT WALLET
        </button>
        <Modal
          isOpen={modalOpen}
          wallets={wallets}
          setWallets={setWallets}
          onClose={() => setModalOpen(false)}
        />
      </div>
      <div className=" mt-10">
        <p className="text-[#ADABAA] text-[16px] border-b-2 border-[#1E2328] px-2">
          Total Wallets - {wallets.length}
        </p>
      </div>
      <div className="flex justify-between my-2 px-8">
        <p className="text-[16px] text-[#474848] font-semibold">User</p>
        <p className="text-[16px] text-[#474848] font-semibold">Address</p>
        <p className="text-[16px] text-[#474848] font-semibold ml-16">
          Holding
        </p>
        <p className="text-[16px] text-[#474848] font-semibold">Actions</p>
      </div>
      {wallets &&
        wallets.length > 0 &&
        wallets.map((value, index) => {
          return (
            <>
              <div className="bg-[#161C23] flex justify-between items-center p-2 px-8 mt-3">
                <div className="flex items-center">
                  <img src="/assets/BitCoin.svg" alt="loading..." />
                  <p className="text-[#ADABAA] text-[16px]">{value.userName}</p>
                </div>
                <p className="text-[#ADABAA] text-[16px]">{value.address}</p>
                <p className="text-[#ADABAA] text-[16px]">{value.Holding}</p>
                <button onClick={() => handleDelete(index)}>
                  {" "}
                  <MdDeleteOutline className="text-[#ADABAA] text-[16px]" />{" "}
                </button>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default WalletTable;
