import { createReducer } from '@reduxjs/toolkit';
import rankingsData from '../../data/rankings';
import { Rankings } from '../../@types/rankings';

interface RankingsState {
  list: Rankings[]
}

export const initialState: RankingsState = {
  list: rankingsData,
};

const rankingsReducer = createReducer(initialState, () => {

});

export default rankingsReducer;
