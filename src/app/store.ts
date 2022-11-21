import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feacture/counter/counter-slice'
import { apiGitHubSlice } from '../feacture/gitHub/gitHup-api-slice'


const value = configureStore({
    reducer: {
        counter: counterReducer,
        [apiGitHubSlice.reducerPath]: apiGitHubSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiGitHubSlice.middleware)
    }
})

export default value;

export type AppDispatch = typeof value.dispatch;
export type RootState = ReturnType<typeof value.getState>