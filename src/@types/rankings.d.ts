export interface Rankings {
  id: number
  ranking: string
  ranking_player: {
    id: number
    name: string
    player_country: {
      name: string
    }
  }
  ranking_faction: {
    name: string
  }
  ranking_type: {
    name: string
  }
}

export interface RankingsBis {
  id: number
  ranking: '213.05',
  ranking_player: {
    id: 42,
    name: 'Nuubman',
    player_country: {
      name: 'France',
    },
  },
  ranking_faction: {
    name: 'Garde de Nuit',
  },
  ranking_type: {
    name: 'Online',
  },
}
