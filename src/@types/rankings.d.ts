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
