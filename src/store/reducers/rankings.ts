/* eslint-disable max-len */
import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import rankingsData from '../../data/rankings';
import { Rankings } from '../../@types/rankings';

interface RankingsState {
  list: Rankings[]
  rankingsToDisplay: Rankings[]
  isLoading: boolean
  factionOnFiltering: string
}

export const initialState: RankingsState = {
  list: [],
  rankingsToDisplay: [],
  isLoading: true,
  factionOnFiltering: '',
};

export const setLoading = createAction<boolean>('rankings/SET_LOADING');
export const factionRankings = createAction<string>('rankings/ONE_FACTION_RANKINGS');

export const fetchRankings = createAsyncThunk(
  'rankings/FETCH_RANKINGS',
  async () => {
    const { data } = await axios.get('http://localhost:3000/api/rankings');
    return data as Rankings[];
  },
);

const rankingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(factionRankings, (state, action) => {
      if (state.factionOnFiltering !== action.payload) {
        const factionName = action.payload;
        const filteredRankings = state.list.filter((obj) => obj.ranking_faction.name === factionName);
        state.rankingsToDisplay = filteredRankings;
        state.factionOnFiltering = factionName;
      } else {
        state.rankingsToDisplay = state.list;
        state.factionOnFiltering = '';
      }
    })
    .addCase(fetchRankings.fulfilled, (state, action) => {
      state.list = action.payload;
      state.rankingsToDisplay = state.list;
      state.isLoading = false;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

export default rankingsReducer;
