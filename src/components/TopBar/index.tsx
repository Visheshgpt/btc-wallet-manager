import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { setSyncing } from "@/redux/walletReducer";
import { SyncItem } from "@/utils/syncItems";
import { useSyncQueueContext } from "@/context";

const TopBar = () => {
  const dispatch = useDispatch();
  const { syncQueue: syncQueueInstance } = useSyncQueueContext();
  const { isSyncing, wallets } = useSelector(
    (state: RootState) => state.wallet
  );

  const addToQueue = () => {
    wallets?.forEach(({ address, walletName }) => {
      syncQueueInstance.addToQueue(new SyncItem(dispatch, address, walletName));
    });
  };

  return (
    <div className="bg-[#1A1F26] text-white py-2 flex justify-between container border-b-2 border-[#1E2328]">
      <img src="/assets/cysunc logo.png" alt="logo-loading..." />
      <div className="text-[#E0B36A] font-lato flex gap-4 items-center cursor-pointer">
        <img src="/assets/SyncIcon.png" alt="target" />
        {isSyncing ? "Syncing" : "Synced"}
        <button
          disabled={isSyncing}
          className="text-[#6ae07c]"
          onClick={addToQueue}
        >
          Re-Sync
        </button>
      </div>
    </div>
  );
};

export default TopBar;
