"use client";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <main className="h-full">
      <Provider store={store}>
        <TopBar />
        <SideBar />
      </Provider>
    </main>
  );
}
