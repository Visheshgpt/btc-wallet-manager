"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SyncQueue from "@/utils/SyncQueue";
import { SyncItem } from "@/utils/syncItems";
import { setSyncing } from "@/redux/walletReducer";
const syncQueue = new SyncQueue();

const TopBar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wallet);
  const { isSyncing, wallets } = data;

  useEffect(() => {
    syncQueue.on("statusChange", () => {
      dispatch(setSyncing(syncQueue.isSyncing));
    });
  }, [syncQueue, dispatch]);

  const addToQueue = () => {
    wallets?.forEach((element) => {
      const walletAddress = element.address;
      const walletName = element.walletName;
      syncQueue.addToQueue(new SyncItem(dispatch, walletAddress, walletName));
    });
  };

  return (
    <>
      <div className=" bg-[#1A1F26] text-white py-2 flex justify-between container border-b-2 border-[#1E2328]">
        <img src="/assets/cysunc logo.png" alt="logo-loading..." />
        <div className=" text-[#E0B36A] font-lato flex gap-4 items-center cursor-pointer">
          {" "}
          <img src="/assets/SyncIcon.png" alt="target" />{" "}
          {isSyncing ? "Syncing" : "Synced"}
          <button
            disabled={isSyncing}
            className=" text-[#6ae07c]"
            onClick={addToQueue}
          >
            {" "}
            Re-Sync{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
