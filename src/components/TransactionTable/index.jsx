import React from "react";

const TransactionTable = () => {
  const TransactionList = [
    {
      id: 1,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
    {
      id: 2,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
    {
      id: 3,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
    {
      id: 4,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
    {
      id: 5,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
    {
      id: 6,
      date: "12/11/2020",
      time: "10:31:20 AM",
      wallet: "Aru",
      amount: "0.5268 BTC",
      result: "RECEIVED",
      status: "SUCCESS",
    },
  ];
  return (
    <div className="pt-5">
        <div className="my-4">
            <h5 className="text-[#C78D4E] text-[16px] font-bold">Transactions</h5>
        </div>
      <div className=" mt-10">
        <p className="text-[#ADABAA] text-[16px] border-b-2 border-[#1E2328] px-2">
          Total Coins - 7
        </p>
      </div>
      <div className="flex justify-between my-2 px-8">
        <p className="text-[16px] text-[#474848] font-semibold">Coin</p>
        <p className="text-[16px] text-[#474848] font-semibold">Wallet</p>
        <p className="text-[16px] text-[#474848] font-semibold">Amount</p>
        <p className="text-[16px] text-[#474848] font-semibold">Result</p>
        <p className="text-[16px] text-[#474848] font-semibold">Status</p>
      </div>
      {TransactionList.map((value, index) => {
        return (
          <>
            <div className="bg-[#161C23] flex justify-between items-center p-2 px-8 mt-3">
              <div className="flex items-center">
                <img src="/assets/BitCoin.svg" alt="loading..." />
                <div>
                  <p className="text-[#ADABAA] text-[16px]">{value.date}</p>
                  <p className="text-[#ADABAA] text-[12px]">{value.time}</p>
                </div>
              </div>
              <p className="text-[#ADABAA] text-[16px] mr-16">{value.wallet}</p>
              <p className="text-[#ADABAA] text-[16px]">{value.amount}</p>
              <p className="text-[#8484F1] font-semibold text-[16px] flex items-center gap-1">
                <img src="/assets/arrow.png" alt="loading..." /> {value.result}
              </p>
              <p className="text-[#8484F1] font-semibold text-[16px]">
                {value.status}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default TransactionTable;
