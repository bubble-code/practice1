import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feacture/counter/counter-slice'


const value = configureStore({
    reducer: { 
        counter: counterReducer,
     }
})
    
export default value;

export type AppDispatch = typeof value.dispatch;
export type RootState = ReturnType<typeof value.getState>