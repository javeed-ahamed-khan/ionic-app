import { createSlice } from '@reduxjs/toolkit'

export interface IComment{
  "postId": number
  "id": number
  "name": string
  "email": string
  "body": string
}

// Define a type for the slice state
interface CommentState {
  comments: IComment[]
}

// Define the initial state using that type
const initialState: CommentState = {
  comments: []
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state, action) => {
        state.comments = action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const {  getComments } = commentSlice.actions

export default commentSlice.reducer