import BigNumber from "bignumber.js";

export const formatBalance = (amount) => {
  return new BigNumber(amount).div(1e8).toFormat();
};
