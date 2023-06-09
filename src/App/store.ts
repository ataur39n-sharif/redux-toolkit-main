import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./features/cartSlice.ts";
import ProductSlice from "./features/productSlice.ts";

export const store = configureStore({
    reducer: {
        cart:CartSlice,
        products:ProductSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch