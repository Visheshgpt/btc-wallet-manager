import { EventEmitter } from "events";

class SyncQueue extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
    this.isSyncing = false;
  }

  addToQueue(item) {
    this.queue.push(item);
    if (!this.isSyncing) {
      this.syncNext();
    }
  }

  async syncNext() {
    if (this.queue.length > 0) {
      this.isSyncing = true;
      this.emit("statusChange");
      const item = this.queue.shift();
      try {
        await item.sync();
      } catch (error) {
        console.error(`Failed to sync item: ${error}`);
        setTimeout(() => {
          this.syncNext();
        }, 200); // Delay of 0.2 seconds between each item execution
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
