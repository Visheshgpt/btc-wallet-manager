import Image from "next/image";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="h-full">
      <TopBar />
      <SideBar />
    </main>
  );
}
