import logoCitadelle from '../../assets/images/logo-citadelle.png';
import './styles.scss';

function Header() {
  return (

    <header>
      <div className="logo-citadelle">
        <img src={logoCitadelle} alt="Logo des Archives de la Citadelle" />
      </div>

      <div className="nav-menu">
        <a href="/about">A propos</a>
        <a href="/rankings">Classements</a>
        <a href="/tournaments">Tournois</a>
        <a href="/stats">Statistiques</a>
        <a href="/ressources">Ressources</a>
        <a href="/clubs">Clubs</a>
        <a href="/login">Se connecter</a>
      </div>

    </header>
  );
}

export default Header;
