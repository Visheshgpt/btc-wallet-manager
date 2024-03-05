"use client";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { SyncQueueProvider } from "@/context";




export default function Home() {
  return (
    <main className="h-full">
      <Provider store={store}>
        <SyncQueueProvider>
        <TopBar />
        <SideBar/>
        </SyncQueueProvider>
      </Provider>
    </main>
  );
}
