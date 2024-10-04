import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Slices/CartSlice"; // Import only the reducer

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer, // Use the reducer from CartSlice
//     }
// });
