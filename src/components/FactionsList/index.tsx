import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { factionRankings } from '../../store/reducers/rankings';
import './styles.scss';

function FactionsList() {
  const dispatch = useAppDispatch();

  const factionsList = useAppSelector((state) => state.factions.list);

  const handleFactionFilter = (faction: string) => {
    dispatch(factionRankings(faction));
  };

  return (

    <div className="factions-list">

      {factionsList.map((faction) => (
        <button
          key={faction.name}
          type="button"
          onClick={() => handleFactionFilter(faction.name)}
        >
          <img src={`./src/assets/images/logo_faction/${faction.picture}.png`} alt={`Logo ${faction.name}`} className="faction-logo" />
        </button>
      ))}

    </div>

  );
}

export default FactionsList;
