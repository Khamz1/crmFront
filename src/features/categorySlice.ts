import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    category: [],
    error: null,
    loading: false,
}

export const fetchCategory = createAsyncThunk(
    'category/fetch',
    async(data, thunkAPI)=>{
        try {
            const res = await fetch('http://localhost:4000/categories')
            const category = await res.json()
            return category
        } catch (error) {
            return error
        }
    }
)

// export const fetchOneCategory = createAsyncThunk(
//     'oneCategory/fetch',
//     async(id, thunkAPI)=>{
//         try {
//             const res = await fetch(`http://localhost:5000/category/${id}`)
//             const categoryOne = await res.json()
//             return categoryOne
//         } catch (error) {
//             return error
//         }
//     }
// )

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            // console.log(action.payload);
            state.category = action.payload,
            state.loading = false,
            state.error = null
        })
        .addCase(fetchCategory.pending, (state, action)=>{
            state.loading = true,
            state.error = null
        })
        .addCase(fetchCategory.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        })
        // .addCase(fetchOneCategory.fulfilled, (state, action)=>{
        //     state.comments = action.payload,
        //     state.loading = false,
        //     state.error = null
        // })
        // .addCase(fetchOneCategory.pending, (state, action)=>{
        //     state.loading = true,
        //     state.error = null
        // })
        // .addCase(fetchOneCategory.rejected, (state, action)=>{
        //     state.loading = false,
        //     state.error = action.payload
        // })
       
    }
})

export default categorySlice.reducer