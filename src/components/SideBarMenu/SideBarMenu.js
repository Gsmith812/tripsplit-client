import React, { useContext } from 'react';
import TripSplitContext from '../../context/TripSplitContext';

export default function SideBarMenu(props) {

    const { handleModals } = useContext(TripSplitContext);

    return (
        <div className='SideBarMenu'>
            <ul className='menu-bar'>
                <li onClick={() => props.history.push('/')}>HOME</li>
                <li onClick={() => props.history.push('/dashboard')}>DASHBOARD</li>
                <li onClick={() => handleModals('login')}>LOGIN</li>
            </ul>
        </div>
    )
}