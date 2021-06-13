import {createSlice} from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    level: 1,
    retries: 0,
    route: 'scene'
  },
  reducers: {
    nextLevel: (state) => {state.level++},
    setRoute: (state, action) => {state.route = action.payload},
    retryLevel: state => {state.retries++},
  },
})

export const {nextLevel, setRoute, retryLevel} = gameSlice.actions
export default gameSlice.reducer
