export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

export const deposit = (amount) => {
  return {
    type: DEPOSIT,
    payload: amount,
  };
};

export const withdraw = (amount) => {
  return {
    type: WITHDRAW,
    payload: amount,
  };
};

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
  };
};
