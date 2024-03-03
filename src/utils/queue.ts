import Queue from "bull";
import { SyncItem, HistorySyncItem } from "./syncItems";

const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const syncQueue = new Queue("syncQueue");

// Process balance sync jobs
syncQueue.process("balance", async (job) => {

  console.log("job", job);
    
  const { walletId } = job.data;
  const syncItem = new SyncItem(walletId);
  await syncItem.sync();
});

// Process history sync jobs
syncQueue.process("history", async (job) => {
  const { walletId } = job.data;
  const historySyncItem = new HistorySyncItem(walletId);
  await historySyncItem.sync();
});

export default syncQueue;
