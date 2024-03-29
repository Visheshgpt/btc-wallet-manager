import { EventEmitter } from "events";

interface SyncItem {
  sync: () => Promise<void>;
}

class SyncQueue extends EventEmitter {
  private queue: SyncItem[];
  public isSyncing: boolean;

  constructor() {
    super();
    this.queue = [];
    this.isSyncing = false;
  }

  addToQueue(item: SyncItem): void {
    this.queue.push(item);
    if (!this.isSyncing) {
      this.syncNext();
    }
  }

  private async syncNext(): Promise<void> {
    if (this.queue.length > 0) {
      this.isSyncing = true;
      this.emit("statusChange");
      const item: SyncItem | undefined = this.queue.shift();
      try {
        if (item) {
          await item.sync();
        }
      } catch (error) {
        console.error(`Failed to sync item: ${error}`);
        // add item to queue if fails
        // can also add max retry and retry counter to prevents the sync to be called indefinetly.
        item && this.queue.push(item);
      } finally {
        setTimeout(() => {
          this.syncNext();
        }, 200); // Delay of 0.2 seconds between each item execution
      }
    } else {
      this.isSyncing = false;
      this.emit("statusChange");
    }
  }
}

export default SyncQueue;
