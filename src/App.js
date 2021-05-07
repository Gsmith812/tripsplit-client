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

const handleNewExpense = (newExpense, tripId) => {
  const currTrip = trips.find(t => t.id === tripId);
  newExpense.id = currTrip.expenses.length + 1;
  currTrip.expenses.push(newExpense);
  currTrip.totalAmount += newExpense.amount;
  const addPaidByAmount = currTrip.friends.find(pay => pay.name === newExpense.paidBy);
  addPaidByAmount.amountPaid += newExpense.amount;
  newExpense.friendsIncluded.map(f => {
    if(newExpense.splitType === 'Equally') {
      const equalSplit = parseFloat(newExpense.amount / 3);
      if(!addPaidByAmount.amountOwed) {
        addPaidByAmount.amountOwed = {[f.name]: -equalSplit}
      } else if(!addPaidByAmount.amountOwed[f.name]) {
        addPaidByAmount.amountOwed = {...addPaidByAmount.amountOwed, [f.name]: -equalSplit}
      } else {
        addPaidByAmount.amountOwed[f.name] -= equalSplit;
      }
      if(!f.amountOwed) {
        f.amountOwed = {[newExpense.paidBy]: equalSplit}
      } else if(!f.amountOwed[newExpense.paidBy]) {
        f.amountOwed = {...f.amountOwed,[newExpense.paidBy]: equalSplit};
      } else {
        f.amountOwed[newExpense.paidBy] += equalSplit;
      }
    } 
    return f;
  })
  if(newExpense.itemizedAmounts) {
    newExpense.itemizedAmounts.map(item => {
      if(item.name !== newExpense.paidBy){
        console.log('if statement entered');
        if(!addPaidByAmount.amountOwed) {
          addPaidByAmount.amountOwed = {[item.name]: -item.amount}
        } else if(!addPaidByAmount.amountOwed[item.name]) {
          addPaidByAmount.amountOwed = {...addPaidByAmount.amountOwed, [item.name]: -item.amount}
        } else {
          addPaidByAmount.amountOwed[item.name] -= item.amount;
        }
        let friendOwes = currTrip.friends.find(f => f.name === item.name);
        console.log(friendOwes);
        if(!friendOwes.amountOwed) {
          friendOwes.amountOwed = {[addPaidByAmount.name]: +item.amount};
        } else if(!friendOwes.amountOwed[addPaidByAmount.name]){
          friendOwes.amountOwed = {...friendOwes.amountOwed, [addPaidByAmount.name]: +item.amount};
        } else {
          friendOwes.amountOwed[addPaidByAmount.name] -= item.amount;
        }
      }
      return newExpense;
    })
  }
  console.log(newExpense);
  setTrips([...trips]);
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
    handleAddTrip,
    handleNewExpense
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
