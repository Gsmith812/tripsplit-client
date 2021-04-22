import React, { useContext } from 'react';
import TripSplitContext from '../../context/TripSplitContext';

export default function SideBarMenu(props) {

    const { handleModals } = useContext(TripSplitContext);

    const handleLinkClicked = modal => {
        handleModals(modal);
        props.menuClicked();
    }

    return (
        <div className='SideBarMenu'>
            <ul className='menu-bar'>
                <li onClick={() => props.history.push('/dashboard')}>DASHBOARD</li>
                <li onClick={() => handleLinkClicked('login')}>LOGIN</li>
            </ul>
        </div>
    )
}