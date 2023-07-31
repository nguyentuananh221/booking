import { configureStore } from '@reduxjs/toolkit'
import onClickReducer from './headerReducer/onClickReducer'
import dataReducer from './dataReducer/dataReducer'

export const store = configureStore({
     reducer: {
          // noi khai bao cac reducers
          click: onClickReducer,
          testData: dataReducer
     },
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

