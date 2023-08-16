
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Category {
    _id: string;
    name: string;
}

interface CategoryState {
    category: Category[];
    error: string | null;
    loading: boolean;
}

export const fetchCategory = createAsyncThunk<Category[]>(
    'category/fetch',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/categories');
            const category = await res.json();
            return category;
        } catch (error) {
            throw error;
        }
    }
);

export const fetchAddCategory = createAsyncThunk<Category, string>(
    'addCategory/fetch',
    async (name, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            const category = await res.json();
            return category;
        } catch (error) {
            throw error;
        }
    }
);

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: [],
        error: null,
        loading: false,
    } as CategoryState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.category = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Произошла ошибка";
            })
            .addCase(fetchAddCategory.fulfilled, (state, action) => {
                state.category.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchAddCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAddCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Произошла ошибка";
            });
    },
});

export default categorySlice.reducer;
