import { DEPOSIT, WITHDRAW, CLEAR_HISTORY } from "./actions";

const initialState = {
  balance: 0,
  transactions: [],
};

export const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT: {
      const amount = Number(action.payload);

      return {
        ...state,
        balance: state.balance + amount,
        transactions: [...state.transactions, `Deposited $${amount}`],
      };
    }

    case WITHDRAW: {
      const amount = Number(action.payload);

      if (state.balance < amount) return state;

      return {
        ...state,
        balance: state.balance - amount,
        transactions: [...state.transactions, `Withdrew $${amount}`],
      };
    }

    case CLEAR_HISTORY:
      return {
        ...state,
        transactions: [],
      };

    default:
      return state;
  }
};
