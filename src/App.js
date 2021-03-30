import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import TripSplitContext from './context/TripSplitContext';
import TripPage from './views/TripPage/TripPage';
import STORE from './dummy-store';

function App() {

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getTrips = async () => {
      setTrips(STORE.trips);
    }
    getTrips();
  }, [])

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  }

  const handleModals = modal => {
    setModal(modal);
    showModal();
}

const handleAddTrip = newTrip => {
  newTrip.id = trips[trips.length - 1].id + 1;
  setTrips([...trips, newTrip]);
}

  const contextValue = {
    show,
    setShow,
    showModal,
    hideModal,
    handleModals,
    modal,
    setModal,
    trips,
    handleAddTrip
  }

  return (
    <main className="App">
      <TripSplitContext.Provider value={contextValue}>
        <Switch>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <Route
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            path='/trips/:tripId'
            component={TripPage}
          />
        </Switch>
      </TripSplitContext.Provider>
    </main>
  );
}

export default App;
