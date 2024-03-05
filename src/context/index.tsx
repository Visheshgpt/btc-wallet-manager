// SyncQueueContext.tsx
import React, { createContext, useContext, useEffect } from "react";
import SyncQueue from "@/utils/SyncQueue";
import { useDispatch } from "react-redux";
import { setSyncing } from "@/redux/walletReducer";

export interface SyncQueueContextType {
  syncQueue: SyncQueue;
}

const syncQueueInstance = new SyncQueue();

const SyncQueueContext = createContext<SyncQueueContextType | null>(null);

export const useSyncQueueContext = (): SyncQueueContextType => {
  const context = useContext(SyncQueueContext);
  if (!context) {
    throw new Error(
      "useSyncQueueContext must be used within a SyncQueueProvider"
    );
  }
  return context;
};

export const SyncQueueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStatusChange = () => {
      dispatch(setSyncing(syncQueueInstance.isSyncing));
    };
    syncQueueInstance.on("statusChange", handleStatusChange);

    return () => {
      syncQueueInstance.off("statusChange", handleStatusChange);
    };
  }, [dispatch]);

  return (
    <SyncQueueContext.Provider value={{ syncQueue: syncQueueInstance }}>
      {children}
    </SyncQueueContext.Provider>
  );
};
