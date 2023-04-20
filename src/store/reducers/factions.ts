import { createReducer, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import rankingsData from '../../data/rankings';
import { Rankings } from '../../@types/rankings';

interface IFaction {
  name: string
  picture: string
}

interface FactionsState {
  list: IFaction[]
}

export const initialState: FactionsState = {
  list: [
    {
      name: 'Baratheon',
      picture: 'baratheon',
    },
    {
      name: 'Garde de Nuit',
      picture: 'nightsWatch',
    },
    {
      name: 'Greyjoy',
      picture: 'greyjoy',
    },
    {
      name: 'Lannister',
      picture: 'lannister',
    },
    {
      name: 'Martell',
      picture: 'martell',
    },
    {
      name: 'Neutres',
      picture: 'neutral',
    },
    {
      name: 'Peuple Libre',
      picture: 'freeFolks',
    },
    {
      name: 'Stark',
      picture: 'stark',
    },
    {
      name: 'Targaryen',
      picture: 'targaryen',
    },
  ],
};

const factionsReducer = createReducer(initialState, () => {

});

export default factionsReducer;
