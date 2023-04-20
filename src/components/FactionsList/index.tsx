import {
  BaratheonLogo, FreeFolksLogo, GreyjoyLogo, LannisterLogo, MartellLogo, NeutralLogo,
  NightsWatchLogo, StarkLogo, TargaryenLogo,
} from '../../assets/images/logo_faction';
import './styles.scss';

function FactionsList() {
  return (

    <div className="factions-list">
      <img src={BaratheonLogo} alt="Logo Baratheon" className="faction-logo" />
      <img src={FreeFolksLogo} alt="Logo Peuple Libre" className="faction-logo" />
      <img src={GreyjoyLogo} alt="Logo Greyjoy" className="faction-logo" />
      <img src={LannisterLogo} alt="Logo Lannister" className="faction-logo" />
      <img src={MartellLogo} alt="Logo Martell" className="faction-logo" />
      <img src={NeutralLogo} alt="Logo Neutre" className="faction-logo" />
      <img src={NightsWatchLogo} alt="Logo Garde de Nuit" className="faction-logo" />
      <img src={StarkLogo} alt="Logo Stark" className="faction-logo" />
      <img src={TargaryenLogo} alt="Logo Targaryen" className="faction-logo" />
    </div>

  );
}

export default FactionsList;
