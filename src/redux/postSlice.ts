import { createSlice } from '@reduxjs/toolkit'

export interface IPost{
  userId: number
  id: number
  title: string
  body:string
}

// Define a type for the slice state
interface PostState {
  posts: IPost[]
}

// Define the initial state using that type
const initialState: PostState = {
  posts: []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getPosts } = postSlice.actions

export default postSlice.reducer