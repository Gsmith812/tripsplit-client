import React from 'react';

const TripSplitContext = React.createContext({
    show: null,
    modal: null,
    setShow: () => {},
    showModal: () => {},
    hideModal: () => {},
    handleModals: () => {},
    setModal: () => {},
    trips: null,
    handleAddTrip: () => {},
})

export default TripSplitContext;