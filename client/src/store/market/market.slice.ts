import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StaticImageData } from 'next/image'

interface IProduct {
  id: number,
  img: StaticImageData,
  title: string,
  price: string | number,

}


const initialState: IProduct[] = []


export const marketSlice = createSlice({
  name: 'market',
  initialState: initialState,
  reducers: {
    addToMarket: (state, { payload: product }: PayloadAction<IProduct>) => {
      // const product = action.payload

      if (state.some(r => r.id === product.id)) return
      state.push(product)
    },

    deleteToMarket: (state, { payload: product }: PayloadAction<IProduct>) => {
      // const product = action.payload

      if (state.some(r => r.id === product.id)) {
        return state = state.filter(r => r.id !== product.id)
      }
      // state = state.filter(r => r.id !== product.id)
      // state.push(product)
    }

  }

})

export const { actions, reducer } = marketSlice