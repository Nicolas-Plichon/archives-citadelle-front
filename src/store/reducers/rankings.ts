import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import rankingsData from '../../data/rankings';
import { Rankings } from '../../@types/rankings';

interface RankingsState {
  list: Rankings[]
  isLoading: boolean
}

export const initialState: RankingsState = {
  list: rankingsData,
  isLoading: true,
};

export const setLoading = createAction<boolean>('rankings/SET_LOADING');

export const fetchRankings = createAsyncThunk(
  'rankings/FETCH_RANKINGS',
  async () => {
    const { data } = await axios.get('http://localhost:3000/api/rankings');
    return data as Rankings[];
  },
);

const rankingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRankings.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

export default rankingsReducer;
