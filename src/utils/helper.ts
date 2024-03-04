import BigNumber from "bignumber.js";

export const formatBalance = (amount: number | string): string => {
  return new BigNumber(amount).div(1e8).toFormat();
};
