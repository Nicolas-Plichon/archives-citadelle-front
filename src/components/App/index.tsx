import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Header from '../Header';
import Rankings from '../Rankings';
import { fetchRankings } from '../../store/reducers/rankings';
import './styles.scss';

function App() {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.rankings.isLoading);

  useEffect(() => {
    dispatch(fetchRankings());
  }, [dispatch]);

  return (
    <div className="app">

      <Header />

      <Rankings />

    </div>
  );
}

export default App;
