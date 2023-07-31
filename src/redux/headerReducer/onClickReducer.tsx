import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Component } from 'react'
import { JsxElement } from 'typescript'
import Activity from '../../components/itemHeader/Activity'
import ChanLang from '../../components/itemHeader/ChanLang'
import DownloadApp from '../../components/itemHeader/DownloadApp'
import Login from '../../components/itemHeader/Login'
import Place from '../../components/itemHeader/Place'
import Support from '../../components/itemHeader/Support'
import Transport from '../../components/itemHeader/Transport'
import { DispatchType, RootState } from '../configStore'

export interface initState {
     label: []
}

export interface actionLike {
     data: string
}

const initialState:initState = {
     label: [],
}

export const onClickReducer = createSlice({
     name: 'clickEvent',
     initialState,
     reducers: {
          handleclick: (state:any,action:PayloadAction<String>)=>{
               switch (action.payload){
                    case 'download':{
                         state.label = [
                              {
                                   label: <DownloadApp/>,
                                   key: '1',
                                   style: { width: '140px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'language':{
                         state.label = [
                              {
                                   label: <ChanLang/>,
                                   key: '1',
                                   style: { width: '140px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'login':{
                         state.label = [
                              {
                                   label: <Login/>,
                                   key: '1',
                                   style: { width: '140px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'transport':{
                         state.label = [
                              {
                                   label: <Transport/>,
                                   key: '1',
                                   style: { width: '170px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'place':{
                         state.label = [
                              {
                                   label: <Place/>,
                                   key: '1',
                                   style: { width: '170px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'activity':{
                         state.label = [
                              {
                                   label: <Activity/>,
                                   key: '1',
                                   style: { width: '140px' },
                    
                              },
                         ]
                         break;
                    }
                    case 'support':{
                         state.label = [
                              {
                                   label: <Support/>,
                                   key: '1',
                                   style: { width: '170px' },
                    
                              },
                         ]
                         break;
                    }
               }
          }
     },
})

// Action creators are generated for each case reducer function
export const { handleclick } = onClickReducer.actions

export default onClickReducer.reducer

// ------------action

export const likeAction = (data:String)=>{
     return (dispatch:DispatchType) =>{
          dispatch(handleclick(data))
     }
}