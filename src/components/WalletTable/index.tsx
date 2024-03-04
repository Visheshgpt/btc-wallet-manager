import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { SyncItem } from "@/utils/syncItems";
import SyncQueue from "@/utils/SyncQueue";
import { deleteWallet, setSyncing } from "@/redux/walletReducer";
import { formatBalance } from "@/utils/helper";
import { RootState } from "@/redux/reducers";

const syncQueue = new SyncQueue();

const WalletTable: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const wallets = useSelector((state: RootState) => state.wallet.wallets);

  useEffect(() => {
    syncQueue.on("statusChange", () => {
      dispatch(setSyncing(syncQueue.isSyncing));
    });
  }, [dispatch]);

  const handleAddWalletQueue = (walletAddress: string, walletName: string) => {
    syncQueue.addToQueue(new SyncItem(dispatch, walletAddress, walletName));
  };

  const handleDelete = (address: string) => {
    dispatch(deleteWallet({ address }));
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
          handleAddWalletQueue={handleAddWalletQueue}
          onClose={() => setModalOpen(false)}
        >
          <></>
        </Modal>
      </div>
      <div className=" mt-10">
        <p className="text-[#ADABAA] text-[16px] border-b-2 border-[#1E2328] px-2">
          Total Wallets - {wallets.length}
        </p>
      </div>
      <div className="flex justify-between my-2 px-8">
        <p className="text-[16px] text-[#474848] font-semibold">Wallet Name</p>
        <p className="text-[16px] text-[#474848] font-semibold">Address</p>
        <p className="text-[16px] text-[#474848] font-semibold ml-16">
          Holding
        </p>
        <p className="text-[16px] text-[#474848] font-semibold">Actions</p>
      </div>
      {wallets &&
        wallets.length > 0 &&
        wallets.map((value) => {
          // Assuming value.id is a unique identifier
          const key = `${value.address}`;
          return (
            <div
              className="bg-[#161C23] flex justify-between items-center p-2 px-8 mt-3"
              key={key}
            >
              <div className="flex items-center">
                <img src="/assets/BitCoin.svg" alt="Bitcoin logo" />
                <p className="text-[#ADABAA] text-[16px]">{value.walletName}</p>
              </div>
              <p className="text-[#ADABAA] text-[16px]">{value.address}</p>

              <p className="text-[#ADABAA] text-[16px]">
                {formatBalance(value.balance)} BTC
              </p>
              <button onClick={() => handleDelete(value.address)}>
                <MdDeleteOutline className="text-[#ADABAA] text-[16px]" />
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default WalletTable;
