"use client";
import React, { useState } from "react";
import WalletTable from "../WalletTable";
import TransactionTable from "../TransactionTable";

const Tab = ({ label, Icon, onClick, isActive }) => (
  <div
    className={`cursor-pointer ${
      isActive ? "text-[#E2C19D] border-l-2 border-[#E2C19D]" : "text-white"
    }`}
    onClick={onClick}
  >
    <div className="flex items-center border-b-2 border-[#1E2328] mx-2 gap-2 px-4 py-4">
      <img src={Icon} alt="icon-loading..." />
      {label}
    </div>
  </div>
);

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Wallets", Icon: "/assets/wallet icon.png" },
    { label: "Last Transactions", Icon: "/assets/transcantion icon.png" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-[250px] bg-[#161C23] h-[90vh] m-4 rounded-md pt-4 justify-between">
          <div>
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                Icon={tab.Icon}
                onClick={() => handleTabClick(index)}
                isActive={index === activeTab}
              />
            ))}
          </div>
          <button className="bg-[#4B3C2B] text-white p-2 rounded-b-lg">
            Support
          </button>
        </div>
        <div className="m-4 w-full">
          {activeTab === 0 ? <WalletTable /> : <TransactionTable />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
