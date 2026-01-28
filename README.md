## Next problem
### **Problem Statement: "The Digital Wallet"**

Build a simple app that tracks a user's balance and their transaction history.

#### **1. The State Requirements**

Your Redux store should hold an object with two properties:

* `balance`: A number (starting at 0).
* `transactions`: An array of strings (starting empty `[]`).

#### **2. The Action Requirements**

You need to implement three specific actions:

1. **`DEPOSIT`**: Adds a specific amount to the balance and adds a string like `"Deposited $X"` to the transaction history.
2. **`WITHDRAW`**: Subtracts a specific amount from the balance (only if the balance is sufficient) and adds a string like `"Withdrew $X"` to the history.
3. **`CLEAR_HISTORY`**: Empty the `transactions` array but keep the `balance` the same.

#### **3. The UI Requirements**

* **Display:** Show the current balance at the top.
* **Input:** An input field where the user can type a number (the amount).
* **Buttons:** Two buttons: "Deposit" and "Withdraw".
* **List:** Use `.map()` to display the transaction history list below the buttons.

---

### **Why this tests your knowledge:**

* **Payload Handling:** Unlike the counter (which just adds 1), your actions now need a **payload** (the amount from the input field).
* **Array Immutability:** You must add items to the `transactions` array using the spread operator (`...state.transactions, newItem`) rather than `.push()`.
* **Logic in Reducers:** You need to add a check inside the `WITHDRAW` case to ensure the balance doesn't go below zero.

---

### **Challenge Steps to follow:**

1. **Setup the Store:** Define your `initialState` with `balance` and `transactions`.
2. **Write the Reducer:** Use a `switch` statement to handle the three action types.
3. **Create Action Creators:** Write functions that take an `amount` as an argument and return the action object with a `payload`.
4. **Connect the Component:**
* Use `useSelector` to get both the balance and the array of transactions.
* Use `useDispatch` to trigger the deposit and withdraw actions.
* Use a local React `useState` to track the value of the input box before it is dispatched to Redux.