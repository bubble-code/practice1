import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}
const initialState: CounterState = {
    value: 10
}

const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment(state) {
            state.value++;
        },
        amountAdd(state, action: PayloadAction<number>) {
            state.value += action.payload
        },
        decrement() { }
    },
});

export default counterSlice.reducer;

export const { increment, decrement, amountAdd } = counterSlice.actions