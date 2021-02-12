import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import { useState } from 'react';
import TripSplitContext from './context/TripSplitContext';

function App() {

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState();

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

  const contextValue = {
    show,
    setShow,
    showModal,
    hideModal,
    handleModals,
    modal,
    setModal
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
        </Switch>
      </TripSplitContext.Provider>
    </main>
  );
}

export default App;
