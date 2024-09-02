import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortingState {
    sortField: string;
    sortDirection: 'asc' | 'desc';
}

const initialState: SortingState = {
    sortField: '',
    sortDirection: 'asc',
};

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<SortingState>) => {
            state.sortField = action.payload.sortField;
            state.sortDirection = action.payload.sortDirection;
        },
    },
});

export const { setSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
