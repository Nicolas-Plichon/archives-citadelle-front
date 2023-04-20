import { useAppSelector } from '../../hooks/redux';
import FactionsList from '../FactionsList';
import './styles.scss';

function Rankings() {
  const rankingsList = useAppSelector((state) => state.rankings.rankingsToDisplay);

  return (

    <div>

      <FactionsList />

      <section className="rankings-list">

        <table className="ranking-table">

          <thead>
            <tr>
              <th id="ranking-rank">#</th>
              <th id="ranking-pseudo">Pseudo</th>
              <th id="ranking-faction">Faction</th>
              <th id="ranking-value">Ranking</th>
            </tr>
          </thead>

          <tbody>

            {rankingsList.map((ranking, index) => (
              <tr key={ranking.id} className="ranking-line">
                <td>
                  {index + 1}
                </td>
                <td>
                  {ranking.ranking_player.name}
                  {' ('}
                  {ranking.ranking_player.player_country.name}
                  )
                </td>
                <td>
                  {ranking.ranking_faction.name}
                </td>
                <td>
                  {ranking.ranking}
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </section>

    </div>
  );
}

export default Rankings;
